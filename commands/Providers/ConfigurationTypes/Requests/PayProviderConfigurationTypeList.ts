import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayProviderConfigurationTypeList } from "./PayProviderConfigurationTypeList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified @link {providerConfigurationType}.
 **/
	[Obsolete("Use ReqProviderScriptList instead")]
export abstract class PayProviderConfigurationTypeList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted @link {ProviderConfigurationType}s.
	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the @link {Company.id} of the collection.
 **/
	[Obsolete("Use ReqProviderScriptListByCompany instead")]
export class PayProviderConfigurationTypeListByCompany extends PayProviderConfigurationTypeList implements IPayListByCompany {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ParamId;}