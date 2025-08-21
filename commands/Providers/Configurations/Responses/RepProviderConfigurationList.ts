import { Reply } from "../../../API/Responses/Reply";
import { RepProviderConfigurationList } from "./RepProviderConfigurationList";

/**
 * A container for the requested <see cref="providerConfigurations"/>.
 **/
	[Obsolete("Use RespProviderConfigList instead")]
export abstract class RepProviderConfigurationList extends Reply {
	/**
	 * The list of requested <see cref="ProviderConfiguration"/>s.
	 **/
	providerConfigurations: ProviderConfiguration[];
	}

/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
	[Obsolete("Use RespProviderConfigListByCompany instead")]
export class RepProviderConfigurationListByCompany extends RepProviderConfigurationList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;}