import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";

/**
 * The types of subscriptions available using {@link subscribe}/{@link unsubscribe}.
 * Each type has a different synchronization messages and objects.
 **/
export class PaySubscriptionMerge extends Payload {
	/**
	 * An object to contain the "id" key.
	 * @see {@link Company.id}
	 **/
	company: ParamId;
	/**
	 * The list of subscription types you want to receive.
	 * @see {@link SubscriptionType}
	 **/
	subscriptionTypes: SubscriptionType[];
}