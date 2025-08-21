import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayProviderConfigList } from "./PayProviderConfigList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified {@link providerConfig}.
 **/
export abstract class PayProviderConfigList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link ProviderConfig}s.
	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the {@link Company.id} of the collection.
 **/
export class PayProviderConfigListByCompany extends PayProviderConfigList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;}