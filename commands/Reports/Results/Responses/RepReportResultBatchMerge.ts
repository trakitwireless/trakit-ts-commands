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

	constructor(json: any) {
		super(json);
		this.reportResults = json?.reportResults?.map((e: any) => new ContentIdCompany(e));
	}
}