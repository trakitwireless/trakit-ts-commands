import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepSelfGet } from "../Responses/RepSelfGet";

/**
 * 
 **/
export class PaySelfGet extends Payload {
	override createReply(json: any): Reply {
		return new RepSelfGet(json);
	}
}