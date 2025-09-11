import { BehaviourScript, nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link behaviourScript}.
 **/
export class RepBehaviourScriptGet extends Reply {
	/**
	 * The requested {@link BehaviourScript}.
	 **/
	behaviourScript: BehaviourScript | nothing;

	constructor(json?: any) {
		super(json);
		if (json?.behaviourScript) {
			this.behaviourScript = new BehaviourScript(json.behaviourScript);
		}
	}
}