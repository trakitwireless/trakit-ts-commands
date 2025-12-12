import { Contact, JsonObject, nothing, ulong } from "@trakit/objects";
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
		super(json, "Contact");
		if (json?.contact) {
			this.contact = new Contact(json.contact as JsonObject);
		}
	}
	override getObject(): Contact { return this.contact as Contact; }
	override getCompanyId() { return this.contact?.companyId as ulong; }
}