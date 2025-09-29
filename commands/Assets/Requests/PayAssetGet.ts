import { Reply } from "../../API/Responses/Reply";
import { PayAsset } from "./PayAsset";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { RepAssetGet } from "../Responses/RepAssetGet";

/**
 * Gets details of the specified {@link Asset}.
 **/
export class PayAssetGet extends PayAsset implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link Asset} (if it exists).
	 **/
	includeDeleted: boolean;
	/**
	 * When true, the command will also return {@link AssetMessage}s for the asset.
	 **/
	includeMessages: boolean;
	/**
	 * When true, the command will also return {@link DispatchTask}s for the asset.
	 **/
	includeTasks: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = json?.includeDeleted;
		this.includeMessages = json?.includeMessages;
		this.includeTasks = json?.includeTasks;
	}

	override createReply(json?: JsonObject): Reply {
		return new RepAssetGet(json);
	}
}