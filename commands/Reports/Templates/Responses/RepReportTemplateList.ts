import { nothing, ReportTemplate } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentId } from "commands";

/**
 * A container for the requested {@link reportTemplates}.
 **/
export abstract class RepReportTemplateList extends Reply {
	/**
	 * The list of requested {@link ReportTemplate}s.
	 **/
	reportTemplates: ReportTemplate[] | nothing;

	constructor(json: any) {
		super(json);
		this.reportTemplates = json?.reportTemplates?.map((e: any) => new ReportTemplate(e));
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
	
	constructor(json: any) {
		super(json);
		this.company = ContentId.fromJSON(json?.company);
	}
}