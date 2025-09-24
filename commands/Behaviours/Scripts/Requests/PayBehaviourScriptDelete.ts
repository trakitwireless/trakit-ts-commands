import { Reply } from "../../../API/Responses/Reply";
import { RepBehaviourScriptDelete } from "../Responses/RepBehaviourScriptDelete";
import { PayBehaviourScript } from "./PayBehaviourScript";

/**
 * Deletes an existing {@link BehaviourScript}.
 **/
export class PayBehaviourScriptDelete extends PayBehaviourScript { 
	override createReply(json: any): Reply {
		return new RepBehaviourScriptDelete(json);
	}
}