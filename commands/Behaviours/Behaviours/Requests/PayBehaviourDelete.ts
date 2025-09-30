import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { RepBehaviourDelete } from "../Responses/RepBehaviourDelete";
import { PayBehaviour } from "./PayBehaviour";

/**
 * Deletes an existing {@link Behaviour}.
 **/
export class PayBehaviourDelete extends PayBehaviour { 
	override createReply(json: JsonObject): Reply {
		return new RepBehaviourDelete(json as JsonObject);
	}
}