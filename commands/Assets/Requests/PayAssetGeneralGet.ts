import { PayAsset } from "./PayAsset";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified @link {AssetGeneral}.
 **/
export class PayAssetGeneralGet extends PayAsset implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted @link {AssetGeneral} (if it exists).
	 **/
	includeDeleted: boolean;
	/**
	 * When true, the command will also return @link {AssetGeneralMessage}s for the asset.
	 **/
	includeMessages: boolean;
	/**
	 * When true, the command will also return @link {DispatchTask}s for the asset.
	 **/
	includeTasks: boolean;}