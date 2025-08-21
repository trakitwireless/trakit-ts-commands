import { Reply } from "../../API/Responses/Reply";

/**
 * Gets the list of current subscriptions for your current session.
 **/
export class RepSubscriptionList extends Reply {
	/**
	 * The list of your current subscription types.
	 **/
	subscriptions: Subscription[];}