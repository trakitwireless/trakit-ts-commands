import { JsonObject, nothing } from "@trakit/objects";
import { ReplySyncList } from "../../API/Responses/ReplySyncList";
import { Subscription } from "./Content/Subscription";

/**
 * Gets the list of current subscriptions for your current session.
 **/
export class RepSubscriptionList extends ReplySyncList<Subscription> {
	/**
	 * The list of your current subscription types.
	 **/
	subscriptions: Subscription[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.subscriptions = (json?.subscriptions as JsonObject[])?.map((v: any) => new Subscription(v));
	}
}