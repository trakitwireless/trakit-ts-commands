import { JsonObject } from "@trakit/objects";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepBehaviourScriptBatchDelete } from "../Responses/RepBehaviourScriptBatchDelete";

/**
 * 
 */
export class PayBehaviourScriptBatchDelete extends Payload {
	/**
	 * 
	 */
	behaviourScripts: ParamId[];

	constructor(json?: JsonObject) {
		super(json);
		this.behaviourScripts = (json?.behaviourScripts as JsonObject[])?.map((x: any) => new ParamId(x)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepBehaviourScriptBatchDelete(json);
	}
}