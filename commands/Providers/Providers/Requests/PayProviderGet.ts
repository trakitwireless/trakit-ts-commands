import { PayProvider } from "./PayProvider";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified @link {Provider}.
 **/
export class PayProviderGet extends PayProvider implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted @link {Provider} (if it exists).
	 **/
	includeDeleted: boolean;}