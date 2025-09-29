import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { RepBehaviourScriptBatchMerge } from "../Responses/RepBehaviourScriptBatchMerge";
import { ParamBehaviourScriptMerge } from "./Parameters/ParamBehaviourScriptMerge";

/**
 * 
 **/
export class PayBehaviourScriptBatchMerge extends Payload {
	/**
	 * 
	 **/
	behaviourScripts: ParamBehaviourScriptMerge[];

	constructor(json?: JsonObject) {
		super(json);
		this.behaviourScripts = json?.behaviourScripts?.map((x: any) => new ParamBehaviourScriptMerge(x)) ?? [];
	}

	override createReply(json?: JsonObject): Reply {
		return new RepBehaviourScriptBatchMerge(json);
	}
}