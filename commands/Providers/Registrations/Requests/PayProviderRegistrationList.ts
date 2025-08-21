import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayProviderRegistrationList } from "./PayProviderRegistrationList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified {@link providerRegistration}.
 **/
export abstract class PayProviderRegistrationList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link ProviderRegistration}s.
	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the {@link Company.id} of the collection.
 **/
export class PayProviderRegistrationListByCompany extends PayProviderRegistrationList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;}