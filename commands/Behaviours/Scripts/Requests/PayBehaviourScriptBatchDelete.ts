import { Reply } from "../../../API/Responses/Reply";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { RepBehaviourScriptBatchDelete } from "../Responses/RepBehaviourScriptBatchDelete";

/**
 * 
 **/
export class PayBehaviourScriptBatchDelete extends Payload {
	/**
	 * 
	 **/
	behaviourScripts: ParamId[];

	constructor(json?: any) {
		super(json);
		this.behaviourScripts = json?.behaviourScripts?.map((x: any) => new ParamId(x)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepBehaviourScriptBatchDelete(json);
	}
}