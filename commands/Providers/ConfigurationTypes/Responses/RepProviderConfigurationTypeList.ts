import { Reply } from "../../../API/Responses/Reply";
import { RepProviderConfigurationTypeList } from "./RepProviderConfigurationTypeList";

/**
 * A container for the requested <see cref="providerConfigurationTypes"/>.
 **/
	[Obsolete("Use RespProviderScriptList instead")]
export abstract class RepProviderConfigurationTypeList extends Reply {
	/**
	 * The list of requested <see cref="ProviderConfigurationType"/>s.
	 **/
	providerConfigurationTypes: ProviderConfigurationType[];
	}

/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
	[Obsolete("Use RespProviderScriptListByCompany instead")]
export class RepProviderConfigurationTypeListByCompany extends RepProviderConfigurationTypeList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;}