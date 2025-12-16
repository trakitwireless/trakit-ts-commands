import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * 
 */
export class RepDispatchJobBatchMerge extends Reply {
	/**
	 * 
	 */
	dispatchJobs: ContentIdCompany[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.dispatchJobs = (json?.dispatchJobs as JsonObject[])?.map((dj: any) => new ContentIdCompany(dj));
	}
}