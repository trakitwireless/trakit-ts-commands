import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayProviderList } from "./PayProviderList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified {@link provider}.
 **/
export abstract class PayProviderList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link Provider}s.
	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the {@link Company.id} of the collection.
 **/
export class PayProviderListByCompany extends PayProviderList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;}