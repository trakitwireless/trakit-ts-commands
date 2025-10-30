import { BehaviourScript, JsonObject, nothing } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link behaviourScript}.
 **/
export class RepBehaviourScriptGet extends ReplySyncGet<BehaviourScript> {
	/**
	 * The requested {@link BehaviourScript}.
	 **/
	behaviourScript: BehaviourScript | nothing;

	constructor(json: JsonObject) {
		super(json, "BehaviourScript");
		if (json?.behaviourScript) {
			this.behaviourScript = new BehaviourScript(json.behaviourScript as JsonObject);
		}
	}
	override getObject() { return this.behaviourScript as BehaviourScript; }
}