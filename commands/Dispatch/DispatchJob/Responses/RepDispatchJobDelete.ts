import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link dispatchJob}.
 **/
export class RepDispatchJobDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link DispatchJob}.
	 **/
	dispatchJob: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.dispatchJob = json?.dispatchJob
			? new ContentIdDeleted(json.dispatchJob)
			: null;
	}
}