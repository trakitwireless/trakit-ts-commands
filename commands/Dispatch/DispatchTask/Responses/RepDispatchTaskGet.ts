import { DispatchTask, nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link dispatchTask}.
 **/
export class RepDispatchTaskGet extends Reply {
	/**
	 * The requested {@link DispatchTask}.
	 **/
	dispatchTask: DispatchTask | nothing;

	constructor(json: any) {
		super(json);
		this.dispatchTask = json?.dispatchTask
			? new DispatchTask(json.dispatchTask)
			: null;
	}
}