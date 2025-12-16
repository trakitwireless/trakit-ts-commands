import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * 
 */
export class RepReportTemplateBatchMerge extends Reply {
	/**
	 * 
	 */
	reportTemplates: ContentIdCompany[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.reportTemplates = (json?.reportTemplates as JsonObject[])?.map((e: any) => new ContentIdCompany(e));
	}
}