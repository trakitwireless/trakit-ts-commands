import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepBehaviourScriptMerge } from "../Responses/RepBehaviourScriptMerge";
import { ParamBehaviourScriptMerge } from "./Parameters/ParamBehaviourScriptMerge";

/**
 * Creates a new or updates an existing {@link BehaviourScript}.
 */
export class PayBehaviourScriptMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link BehaviourScript}.
	 */
	behaviourScript: ParamBehaviourScriptMerge;

	constructor(json?: JsonObject) {
		super(json);
		this.behaviourScript = new ParamBehaviourScriptMerge(json?.behaviourScript as JsonObject);
	}

	/**
	 * 
	 */
	getKey(): string {
		return this.behaviourScript?.id?.toString() ?? "";
	}

	override createReply(json: JsonObject): Reply {
		return new RepBehaviourScriptMerge(json);
	}
}