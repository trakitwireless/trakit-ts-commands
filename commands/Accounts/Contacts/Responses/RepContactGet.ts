import { Contact, JsonObject, nothing, storage, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link contact}.
 **/
export class RepContactGet extends ReplySyncGet<Contact> {
	/**
	 * The requested {@link Contact}.
	 **/
	contact: Contact | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.contact) {
			this.contact = new Contact(json.contact as JsonObject);
		}
	}
	
	override getObject(): Contact { return this.contact as Contact; }
	protected override _getStorage() { return storage.Contact as Map<ulong, Contact>; }
}