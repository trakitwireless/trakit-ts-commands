import { Payload } from "../../API/Requests/Payload";

/**
 * The types of subscriptions available using {@link subscribe}/{@link unsubscribe}.
 * Each type has a different synchronization messages and objects.
 **/
export class PaySubscriptionList extends Payload { 
	override createReply(json: any): Reply {
		return new RepSubscriptionList(json);
	}
}