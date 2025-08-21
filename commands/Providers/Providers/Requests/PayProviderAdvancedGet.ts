import { PayProvider } from "./PayProvider";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified {@link ProviderAdvanced}.
 **/
export class PayProviderAdvancedGet extends PayProvider implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link ProviderAdvanced} (if it exists).
	 **/
	includeDeleted: boolean;}