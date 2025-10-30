import { DispatchJob, JsonObject, nothing } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link dispatchJob}.
 **/
export class RepDispatchJobGet extends ReplySyncGet<DispatchJob> {
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