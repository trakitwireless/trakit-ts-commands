import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * 
 **/
export class RepDispatchJobBatchMerge extends Reply {
	/**
	 * 
	 **/
	dispatchJobs: ContentIdCompany[] | nothing;

	constructor(json: any) {
		super(json);
		this.dispatchJobs = json?.dispatchJobs?.map((dj: any) => new ContentIdCompany(dj));
	}
}