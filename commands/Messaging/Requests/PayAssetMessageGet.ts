import { Reply } from "../../API/Responses/Reply";
import { PayAssetMessage } from "./PayAssetMessage";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { RepAssetMessageGet } from "../Responses/RepAssetMessageGet";

/**
 * Gets details of the specified {@link AssetMessage}.
 **/
export class PayAssetMessageGet extends PayAssetMessage implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link AssetMessage} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepAssetMessageGet(json as JsonObject);
	}
}