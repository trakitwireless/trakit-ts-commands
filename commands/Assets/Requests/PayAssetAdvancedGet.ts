import { PayAsset } from "./PayAsset";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified {@link AssetAdvanced}.
 **/
export class PayAssetAdvancedGet extends PayAsset implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link AssetAdvanced} (if it exists).
	 **/
	includeDeleted: boolean;}