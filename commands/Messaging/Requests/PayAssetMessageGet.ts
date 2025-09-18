import { PayAssetMessage } from "./PayAssetMessage";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified {@link AssetMessage}.
 **/
export class PayAssetMessageGet extends PayAssetMessage implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link AssetMessage} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json: any) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}
}