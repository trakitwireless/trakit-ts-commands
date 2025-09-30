import { JsonObject, nothing, ReportTemplate } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the requested {@link reportTemplates}.
 **/
export abstract class RepReportTemplateList extends Reply {
	/**
	 * The list of requested {@link ReportTemplate}s.
	 **/
	reportTemplates: ReportTemplate[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.reportTemplates = (json?.reportTemplates as JsonObject[])?.map((e: any) => new ReportTemplate(e));
	}
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
}