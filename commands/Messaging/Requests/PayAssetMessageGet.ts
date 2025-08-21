import { PayAssetMessage } from "./PayAssetMessage";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="AssetMessage"/>.
 **/
export class PayAssetMessageGet extends PayAssetMessage implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="AssetMessage"/> (if it exists).
	 **/
	includeDeleted: boolean;}