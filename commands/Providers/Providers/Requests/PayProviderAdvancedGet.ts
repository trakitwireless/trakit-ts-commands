import { PayProvider } from "./PayProvider";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="ProviderAdvanced"/>.
 **/
export class PayProviderAdvancedGet extends PayProvider implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="ProviderAdvanced"/> (if it exists).
	 **/
	includeDeleted: boolean;}