import { PayAsset } from "./PayAsset";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { RepAssetAdvancedGet } from "../Responses/RepAssetAdvancedGet";
import { Reply } from "../../API/Responses/Reply";

/**
 * Gets details of the specified {@link AssetAdvanced}.
 **/
export class PayAssetAdvancedGet extends PayAsset implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link AssetAdvanced} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = json?.includeDeleted;
	}

	override createReply(json?: JsonObject): Reply {
		return new RepAssetAdvancedGet(json);
	}
}