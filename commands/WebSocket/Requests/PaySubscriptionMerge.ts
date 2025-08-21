import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";

/**
 * The types of subscriptions available using <see cref="subscribe"/>/<see cref="unsubscribe"/>.
 * Each type has a different synchronization messages and objects.
 **/
export class PaySubscriptionMerge extends Payload {
	/**
	 * An object to contain the "id" key.
	 * <seealso cref="Company.id"/>
	 **/
	company: ParamId;
	/**
	 * The list of subscription types you want to receive.
	 * <seealso cref="SubscriptionType"/>
	 **/
	subscriptionTypes: SubscriptionType[];
}