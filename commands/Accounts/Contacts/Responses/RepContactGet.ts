import { classes, Contact, JsonObject, nothing } from "@trakit/objects";
import { ReplyGet } from "../../../API/Responses/ReplyGet";

/**
 * A container for the {@link contact}.
 **/
export class RepContactGet extends ReplyGet<Contact> {
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
	protected override _getTypeName(): classes { return "Contact"; }
}