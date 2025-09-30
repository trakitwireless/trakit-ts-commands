import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { RepBehaviourScriptDelete } from "../Responses/RepBehaviourScriptDelete";
import { PayBehaviourScript } from "./PayBehaviourScript";

/**
 * Restores a deleted {@link BehaviourScript}.
 **/
export class PayBehaviourScriptRestore extends PayBehaviourScript { 
	override createReply(json: JsonObject): Reply {
		return new RepBehaviourScriptDelete(json as JsonObject);
	}
}