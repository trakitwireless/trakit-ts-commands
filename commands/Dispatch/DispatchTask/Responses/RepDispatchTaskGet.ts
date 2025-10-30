import { DispatchTask, JsonObject, nothing } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link dispatchTask}.
 **/
export class RepDispatchTaskGet extends ReplySyncGet<DispatchTask> {
	/**
	 * The requested {@link DispatchTask}.
	 **/
	dispatchTask: DispatchTask | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.dispatchTask) {
			this.dispatchTask = new DispatchTask(json.dispatchTask as JsonObject);
		}
	}
}