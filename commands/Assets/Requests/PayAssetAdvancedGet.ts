import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { Reply } from "../../API/Responses/Reply";
import { RepAssetAdvancedGet } from "../Responses/RepAssetAdvancedGet";
import { PayAsset } from "./PayAsset";

/**
 * Gets import { codified } from "@trakit/objects";
details of the specified {@link AssetAdvanced}.
 **/
export class PayAssetAdvancedGet extends PayAsset implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link AssetAdvanced} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepAssetAdvancedGet(json as JsonObject);
	}
}