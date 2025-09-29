import { Reply } from "../../../API/Responses/Reply";
import { RepDispatchTaskDelete } from "../Responses/RepDispatchTaskDelete";
import { PayDispatchTask } from "./PayDispatchTask";

/**
 * Restores a deleted {@link DispatchTask}.
 **/
export class PayDispatchTaskRestore extends PayDispatchTask { 
	override createReply(json?: JsonObject): Reply {
		return new RepDispatchTaskDelete(json);
	}
}