import { PayDispatchTask } from "./PayDispatchTask";

/**
 * Deletes an existing {@link DispatchTask}.
 **/
export class PayDispatchTaskDelete extends PayDispatchTask { 
	override createReply(json: any): Reply {
		return new RepDispatchTaskDelete(json);
	}
}