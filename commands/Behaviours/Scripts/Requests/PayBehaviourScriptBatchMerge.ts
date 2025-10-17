import { JsonObject } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
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
		this.behaviourScripts = (json?.behaviourScripts as JsonObject[])?.map((x: any) => new ParamBehaviourScriptMerge(x)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepBehaviourScriptBatchMerge(json);
	}
}