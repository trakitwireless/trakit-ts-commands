import { Reply } from "../../API/Responses/Reply";
import { Payload } from "../../API/Requests/Payload";
import { RepSubscriptionList } from "../Responses/RepSubscriptionList";

/**
 * The types of subscriptions available using {@link subscribe}/{@link unsubscribe}.
 * Each type has a different synchronization messages and objects.
 **/
export class PaySubscriptionList extends Payload { 
	override createReply(json: JsonObject): Reply {
		return new RepSubscriptionList(json as JsonObject);
	}
}