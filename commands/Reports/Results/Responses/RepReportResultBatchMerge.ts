import { JsonObject } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * 
 **/
export class RepReportResultBatchMerge extends Reply {
	/**
	 * 
	 **/
	reportResults: ContentIdCompany[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.reportResults = (json?.reportResults as JsonObject[])?.map((e: any) => new ContentIdCompany(e));
	}
}