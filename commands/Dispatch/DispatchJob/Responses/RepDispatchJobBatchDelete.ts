import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";

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
		this.dispatchJobs = json?.dispatchJobs?.map((dj: any) => new ContentIdDeleted(dj));
	}
}