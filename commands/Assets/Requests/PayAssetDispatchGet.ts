import { PayAsset } from "./PayAsset";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="AssetDispatch"/>.
 **/
export class PayAssetDispatchGet extends PayAsset implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="AssetDispatch"/> (if it exists).
	 **/
	includeDeleted: boolean;
	/**
	 * When true, the command will also return <see cref="AssetDispatchMessage"/>s for the asset.
	 **/
	includeMessages: boolean;
	/**
	 * When true, the command will also return <see cref="DispatchTask"/>s for the asset.
	 **/
	includeTasks: boolean;}