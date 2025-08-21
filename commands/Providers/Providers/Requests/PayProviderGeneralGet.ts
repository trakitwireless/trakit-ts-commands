import { PayProvider } from "./PayProvider";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified @link {ProviderGeneral}.
 **/
export class PayProviderGeneralGet extends PayProvider implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted @link {ProviderGeneral} (if it exists).
	 **/
	includeDeleted: boolean;}