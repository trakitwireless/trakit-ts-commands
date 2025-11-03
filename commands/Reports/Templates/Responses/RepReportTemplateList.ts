import { email, guid, JsonObject, nothing, ReportTemplate, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link reportTemplates}.
 **/
export abstract class RepReportTemplateList extends ReplySyncList<ReportTemplate> {
	/**
	 * The list of requested {@link ReportTemplate}s.
	 **/
	reportTemplates: ReportTemplate[] | nothing;

	constructor(json: JsonObject) {
		super(json, "ReportTemplate");
		this.reportTemplates = (json?.reportTemplates as JsonObject[])?.map((e: any) => new ReportTemplate(e));
	}
	override getCollection() { return this.reportTemplates as ReportTemplate[]; }
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepReportTemplateListByCompany extends RepReportTemplateList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
	override _filterCollection(pair: [string | guid | email | ulong, ReportTemplate], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
	}
}