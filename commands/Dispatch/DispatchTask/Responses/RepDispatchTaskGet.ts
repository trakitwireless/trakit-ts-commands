import { DispatchTask, JsonObject, nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link dispatchTask}.
 **/
export class RepDispatchTaskGet extends Reply {
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