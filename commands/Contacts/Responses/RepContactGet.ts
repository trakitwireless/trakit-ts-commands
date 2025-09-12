import { Contact, nothing } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the {@link contact}.
 **/
export class RepContactGet extends Reply {
	/**
	 * The requested {@link Contact}.
	 **/
	contact: Contact | nothing;

	constructor(json: any) {
		super(json);
		if (json?.contact) {
			this.contact = new Contact(json.contact);
		}
	}
}