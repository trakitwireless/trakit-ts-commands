import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayProviderConfigurationList } from "./PayProviderConfigurationList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified @link {providerConfiguration}.
 **/
	[Obsolete("Use ReqProviderConfigList instead")]
export abstract class PayProviderConfigurationList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted @link {ProviderConfiguration}s.
	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the @link {Company.id} of the collection.
 **/
	[Obsolete("Use ReqProviderConfigListByCompany instead")]
export class PayProviderConfigurationListByCompany extends PayProviderConfigurationList implements IPayListByCompany {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ParamId;}