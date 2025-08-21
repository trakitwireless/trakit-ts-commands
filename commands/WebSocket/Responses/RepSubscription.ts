import { Reply } from "../../API/Responses/Reply";

/**
 * The types of subscriptions available using <see cref="TrakitSocket.subscribe"/>/<see cref="TrakitSocket.unsubscribe"/>.
 * Each type has a different synchronization messages and objects.
 **/
export class RepSubscription extends Reply {
	/**
	 * An object which contains only one key "id" when there is no error.
	 * The "id" key is the unique identifier of the company to which the array of objects relate.
	 * <seealso cref="Company.id"/>
	 **/
	company: ContentId;
	/**
	 * Subscription types added/removed (or were not applicable) to your socket's subscription list.
	 **/
	merged: SubscriptionType[];
	/**
	 * Subscription types not added to your socket due to insufficient permissions.
	 **/
	denied: SubscriptionType[];
	/**
	 * A returned list of nonsense you sent to my beautiful service.
	 **/
	invalid: string[];
}