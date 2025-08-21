
/**
 * Contains a <see cref="Company.id"/> and an array of <see cref="SubscriptionType"/>s for each <see cref="Company"/>.
 **/
export class Subscription {
	/**
	 * The company relevant to the subscription types you want to receive.
	 * <seealso cref="Company.id"/>
	 **/
	company: ulong;
	/**
	 * List of subscription types for the company.
	 **/
	subscriptionTypes: SubscriptionType[];}