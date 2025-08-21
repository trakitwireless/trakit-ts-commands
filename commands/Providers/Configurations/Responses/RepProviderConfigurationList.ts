import { Reply } from "../../../API/Responses/Reply";
import { RepProviderConfigurationList } from "./RepProviderConfigurationList";

/**
 * A container for the requested @link {providerConfigurations}.
 **/
	[Obsolete("Use RespProviderConfigList instead")]
export abstract class RepProviderConfigurationList extends Reply {
	/**
	 * The list of requested @link {ProviderConfiguration}s.
	 **/
	providerConfigurations: ProviderConfiguration[];
	}

/**
 * Contains the @link {Company.id} of the collection.
 **/
	[Obsolete("Use RespProviderConfigListByCompany instead")]
export class RepProviderConfigurationListByCompany extends RepProviderConfigurationList {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ContentId;}