import { PayProviderScript } from "./PayProviderScript";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="ProviderScript"/>.
 **/
export class PayProviderScriptGet extends PayProviderScript implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="ProviderScript"/> (if it exists).
	 **/
	includeDeleted: boolean;}