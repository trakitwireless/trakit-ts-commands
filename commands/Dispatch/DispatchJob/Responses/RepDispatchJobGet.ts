import { DispatchJob, nothing } from "@trakit/objects";
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
		this.dispatchJob = json?.dispatchJob
			? new DispatchJob(json.dispatchJob)
			: null;
	}
}