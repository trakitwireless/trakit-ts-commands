import { ContentIdCompany } from "commands/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * 
 **/
export class RepReportTemplateBatchMerge extends Reply {
	/**
	 * 
	 **/
	reportTemplates: ContentIdCompany[] | nothing;

	constructor(json: any) {
		super(json);
		this.reportTemplates = json?.reportTemplates?.map((e: any) => new ContentIdCompany(e));
	}
}