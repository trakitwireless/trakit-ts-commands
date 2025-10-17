import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { RepBehaviourScriptDelete } from "../Responses/RepBehaviourScriptDelete";
import { PayBehaviourScript } from "./PayBehaviourScript";

/**
 * Deletes an existing {@link BehaviourScript}.
 **/
export class PayBehaviourScriptDelete extends PayBehaviourScript { 
	override createReply(json: JsonObject): Reply {
		return new RepBehaviourScriptDelete(json);
	}
}