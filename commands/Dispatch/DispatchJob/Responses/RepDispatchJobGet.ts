import { DispatchJob, JsonObject, nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link dispatchJob}.
 **/
export class RepDispatchJobGet extends Reply {
	/**
	 * The requested {@link DispatchJob}.
	 **/
	dispatchJob: DispatchJob | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.dispatchJob) {
			this.dispatchJob = new DispatchJob(json.dispatchJob as JsonObject);
		}
	}
}