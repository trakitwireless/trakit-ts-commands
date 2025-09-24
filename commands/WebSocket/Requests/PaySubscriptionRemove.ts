import { PaySubscriptionMerge } from "./PaySubscriptionMerge";

/**
 * The types of subscriptions available using {@link ReqSubscriptionMerge}.
 * Each type has a different synchronization messages and objects.
 **/
export class PaySubscriptionRemove extends PaySubscriptionMerge { 
	override createReply(json: any): Reply {
		return new RepSubscriptionRemove extends PaySubscriptionMerge(json);
	}
}