import { PayProviderRegistration } from "./PayProviderRegistration";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="ProviderRegistration"/>.
 **/
export class PayProviderRegistrationGet extends PayProviderRegistration implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="ProviderRegistration"/> (if it exists).
	 **/
	includeDeleted: boolean;}