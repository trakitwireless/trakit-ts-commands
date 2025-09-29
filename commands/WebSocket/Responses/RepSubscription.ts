import { nothing } from "@trakit/objects";
import { ContentId } from "../../API/Responses/Content/ContentId";
import { Reply } from "../../API/Responses/Reply";
import { SubscriptionType } from "../Requests/Parameters/SubscriptionType";

/**
 * The types of subscriptions available using {@link TrakitSocket.subscribe}/{@link TrakitSocket.unsubscribe}.
 * Each type has a different synchronization messages and objects.
 **/
export class RepSubscription extends Reply {
	/**
	 * An object which contains only one key "id" when there is no error.
	 * The "id" key is the unique identifier of the company to which the array of objects relate.
	 * @see {@link Company.id}
	 **/
	company: ContentId | nothing;
	/**
	 * Subscription types added/removed (or were not applicable) to your socket's subscription list.
	 **/
	merged: SubscriptionType[] | nothing;
	/**
	 * Subscription types not added to your socket due to insufficient permissions.
	 **/
	denied: SubscriptionType[] | nothing;
	/**
	 * A returned list of nonsense you sent to my beautiful service.
	 **/
	invalid: string[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company);
		this.merged = json?.merged?.map((v: any) => v as SubscriptionType);
		this.denied = json?.denied?.map((v: any) => v as SubscriptionType);
		this.invalid = json?.invalid?.map((v: any) => v as string);
	}
}