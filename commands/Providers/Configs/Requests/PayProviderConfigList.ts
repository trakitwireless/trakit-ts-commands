import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayProviderConfigList } from "./PayProviderConfigList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified <see cref="providerConfig"/>.
 **/
export abstract class PayProviderConfigList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted <see cref="ProviderConfig"/>s.
	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class PayProviderConfigListByCompany extends PayProviderConfigList implements IPayListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ParamId;}