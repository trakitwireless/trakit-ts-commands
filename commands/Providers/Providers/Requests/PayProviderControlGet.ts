import { PayProvider } from "./PayProvider";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified {@link ProviderControl}.
 **/
export class PayProviderControlGet extends PayProvider implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link ProviderControl} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json: any) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}

	override createReply(json: any): Reply {
		return new RepProviderControlGet(json);
	}
}