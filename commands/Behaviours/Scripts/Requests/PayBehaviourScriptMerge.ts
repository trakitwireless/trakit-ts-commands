import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamBehaviourScriptMerge } from "./Parameters/ParamBehaviourScriptMerge";
import { RepBehaviourScriptMerge } from "../Responses/RepBehaviourScriptMerge";

/**
 * Creates a new or updates an existing {@link BehaviourScript}.
 **/
export class PayBehaviourScriptMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link BehaviourScript}.
	 **/
	behaviourScript: ParamBehaviourScriptMerge;

	constructor(json?: JsonObject) {
		super(json);
		this.behaviourScript = new ParamBehaviourScriptMerge(json?.behaviourScript);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.behaviourScript?.id?.toString() ?? "";
	}

	override createReply(json?: JsonObject): Reply {
		return new RepBehaviourScriptMerge(json);
	}
}