import { PayAsset } from "./PayAsset";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";

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

	constructor(json?: any) {
		super(json);
		this.includeDeleted = json?.includeDeleted;
		this.includeMessages = json?.includeMessages;
		this.includeTasks = json?.includeTasks;
	}
}