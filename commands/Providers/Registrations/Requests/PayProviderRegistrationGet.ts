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

	constructor(json: any) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}

	override createReply(json: any): Reply {
		return new RepProviderRegistrationGet(json);
	}
}