import { PayProviderScript } from "./PayProviderScript";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified @link {ProviderScript}.
 **/
export class PayProviderScriptGet extends PayProviderScript implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted @link {ProviderScript} (if it exists).
	 **/
	includeDeleted: boolean;}