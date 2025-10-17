import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { PayProviderRegistration } from "./PayProviderRegistration";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { RepProviderRegistrationGet } from "../Responses/RepProviderRegistrationGet";

/**
 * Gets details of the specified {@link ProviderRegistration}.
 **/
export class PayProviderRegistrationGet extends PayProviderRegistration implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link ProviderRegistration} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepProviderRegistrationGet(json);
	}
}