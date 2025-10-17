import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { Reply } from "../../API/Responses/Reply";
import { RepAssetDispatchGet } from "../Responses/RepAssetDispatchGet";
import { PayAsset } from "./PayAsset";

/**
 * Gets details of the specified {@link AssetDispatch}.
 **/
export class PayAssetDispatchGet extends PayAsset implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link AssetDispatch} (if it exists).
	 **/
	includeDeleted: boolean;
	/**
	 * When true, the command will also return {@link AssetDispatchMessage}s for the asset.
	 **/
	includeMessages: boolean;
	/**
	 * When true, the command will also return {@link DispatchTask}s for the asset.
	 **/
	includeTasks: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
		this.includeMessages = !!json?.includeMessages;
		this.includeTasks = !!json?.includeTasks;
	}

	override createReply(json: JsonObject): Reply {
		return new RepAssetDispatchGet(json);
	}
}