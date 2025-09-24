import { PayBehaviourScript } from "./PayBehaviourScript";

/**
 * Restores a deleted {@link BehaviourScript}.
 **/
export class PayBehaviourScriptRestore extends PayBehaviourScript { 
	override createReply(json: any): Reply {
		return new RepBehaviourScriptRestore(json);
	}
}