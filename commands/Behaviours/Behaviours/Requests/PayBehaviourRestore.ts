import { Reply } from "../../../API/Responses/Reply";
import { RepBehaviourDelete } from "../Responses/RepBehaviourDelete";
import { PayBehaviour } from "./PayBehaviour";

/**
 * Restores a deleted {@link Behaviour}.
 **/
export class PayBehaviourRestore extends PayBehaviour { 
	override createReply(json: any): Reply {
		return new RepBehaviourDelete(json);
	}
}