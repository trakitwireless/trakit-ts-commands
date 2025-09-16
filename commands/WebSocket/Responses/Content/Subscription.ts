import { ulong } from "@trakit/objects";
import { SubscriptionType } from "commands/WebSocket/Requests/Parameters/SubscriptionType";

/**
 * Contains a {@link Company.id} and an array of {@link SubscriptionType}s for each {@link Company}.
 **/
export class Subscription {
	/**
	 * The company relevant to the subscription types you want to receive.
	 * @see {@link Company.id}
	 **/
	company: ulong;
	/**
	 * List of subscription types for the company.
	 **/
	subscriptionTypes: SubscriptionType[];

	constructor(json?: any) {
		this.company = json?.company;
		this.subscriptionTypes = json?.subscriptionTypes;
	}
}