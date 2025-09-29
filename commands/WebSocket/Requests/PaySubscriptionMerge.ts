import { Reply } from "../../API/Responses/Reply";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";
import { SubscriptionType } from "./Parameters/SubscriptionType";
import { RepSubscription } from "../Responses/RepSubscription";

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

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company);
		this.subscriptionTypes = json?.subscriptionTypes;
	}

	override createReply(json?: JsonObject): Reply {
		return new RepSubscription(json);
	}
}