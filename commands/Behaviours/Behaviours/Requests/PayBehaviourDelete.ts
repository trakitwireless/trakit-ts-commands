import { Reply } from "../../../API/Responses/Reply";
import { RepBehaviourDelete } from "../Responses/RepBehaviourDelete";
import { PayBehaviour } from "./PayBehaviour";

/**
 * Deletes an existing {@link Behaviour}.
 **/
export class PayBehaviourDelete extends PayBehaviour { 
	override createReply(json: any): Reply {
		return new RepBehaviourDelete(json);
	}
}