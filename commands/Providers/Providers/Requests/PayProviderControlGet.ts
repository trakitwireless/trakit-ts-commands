import { PayProvider } from "./PayProvider";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="ProviderControl"/>.
 **/
export class PayProviderControlGet extends PayProvider implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="ProviderControl"/> (if it exists).
	 **/
	includeDeleted: boolean;}