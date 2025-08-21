import { Reply } from "../../../API/Responses/Reply";
import { RepProviderConfigurationTypeList } from "./RepProviderConfigurationTypeList";

/**
 * A container for the requested {@link providerConfigurationTypes}.
 **/
	[Obsolete("Use RespProviderScriptList instead")]
export abstract class RepProviderConfigurationTypeList extends Reply {
	/**
	 * The list of requested {@link ProviderConfigurationType}s.
	 **/
	providerConfigurationTypes: ProviderConfigurationType[];
	}

/**
 * Contains the {@link Company.id} of the collection.
 **/
	[Obsolete("Use RespProviderScriptListByCompany instead")]
export class RepProviderConfigurationTypeListByCompany extends RepProviderConfigurationTypeList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId;}