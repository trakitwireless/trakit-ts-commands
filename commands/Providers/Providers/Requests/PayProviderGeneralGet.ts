import { PayProvider } from "./PayProvider";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="ProviderGeneral"/>.
 **/
export class PayProviderGeneralGet extends PayProvider implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="ProviderGeneral"/> (if it exists).
	 **/
	includeDeleted: boolean;}