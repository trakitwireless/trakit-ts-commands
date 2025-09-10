import { ContentId } from "commands/API/Responses/Content/ContentId";
import { Reply } from "../../API/Responses/Reply";

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

	constructor(json: any) {
		super(json);
		this.company = new ContentId(json?.company);
		this.merged = Array.isArray(json?.merged) ? json.merged.map((v: any) => v as SubscriptionType) : [];
		this.denied = Array.isArray(json?.denied) ? json.denied.map((v: any) => v as SubscriptionType) : [];
		this.invalid = Array.isArray(json?.invalid) ? json.invalid.map((v: any) => v as string) : [];
	}
}