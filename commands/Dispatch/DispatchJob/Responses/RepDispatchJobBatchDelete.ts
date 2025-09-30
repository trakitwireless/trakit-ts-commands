import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link dispatchJob}.
 **/
export class RepDispatchJobBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link DispatchJob}.
	 **/
	dispatchJobs: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.dispatchJobs = (json?.dispatchJobs as JsonObject[])?.map((dj: any) => new ContentIdDeleted(dj));
	}
}