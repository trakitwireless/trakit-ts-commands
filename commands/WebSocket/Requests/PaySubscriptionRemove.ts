import { Reply } from "../../API/Responses/Reply";
import { RepSubscription } from "../Responses/RepSubscription";
import { PaySubscriptionMerge } from "./PaySubscriptionMerge";

/**
 * The types of subscriptions available using {@link ReqSubscriptionMerge}.
 * Each type has a different synchronization messages and objects.
 **/
export class PaySubscriptionRemove extends PaySubscriptionMerge { 
	override createReply(json?: JsonObject): Reply {
		return new RepSubscription(json);
	}
}