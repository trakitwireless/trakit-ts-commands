import { PayProviderConfig } from "./PayProviderConfig";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified {@link ProviderConfig}.
 **/
export class PayProviderConfigGet extends PayProviderConfig implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link ProviderConfig} (if it exists).
	 **/
	includeDeleted: boolean;}