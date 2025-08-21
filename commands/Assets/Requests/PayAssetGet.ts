import { PayAsset } from "./PayAsset";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="Asset"/>.
 **/
export class PayAssetGet extends PayAsset implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="Asset"/> (if it exists).
	 **/
	includeDeleted: boolean;
	/**
	 * When true, the command will also return <see cref="AssetMessage"/>s for the asset.
	 **/
	includeMessages: boolean;
	/**
	 * When true, the command will also return <see cref="DispatchTask"/>s for the asset.
	 **/
	includeTasks: boolean;}