import { Reply } from "../../../API/Responses/Reply";
import { PayProvider } from "./PayProvider";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { RepProviderGeneralGet } from "../Responses/RepProviderGeneralGet";

/**
 * Gets details of the specified {@link ProviderGeneral}.
 **/
export class PayProviderGeneralGet extends PayProvider implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link ProviderGeneral} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}

	override createReply(json?: JsonObject): Reply {
		return new RepProviderGeneralGet(json);
	}
}