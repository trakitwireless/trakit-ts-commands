import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { RepDispatchTaskDelete } from "../Responses/RepDispatchTaskDelete";
import { PayDispatchTask } from "./PayDispatchTask";

/**
 * Deletes an existing {@link DispatchTask}.
 */
export class PayDispatchTaskDelete extends PayDispatchTask { 
	override createReply(json: JsonObject): Reply {
		return new RepDispatchTaskDelete(json);
	}
}