import { Reply } from "../../../API/Responses/Reply";
import { PayProviderConfig } from "./PayProviderConfig";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { RepProviderConfigGet } from "../Responses/RepProviderConfigGet";

/**
 * Gets details of the specified {@link ProviderConfig}.
 **/
export class PayProviderConfigGet extends PayProviderConfig implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link ProviderConfig} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json: any) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}

	override createReply(json: any): Reply {
		return new RepProviderConfigGet(json);
	}
}