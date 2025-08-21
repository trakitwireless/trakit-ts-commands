import { Reply } from "../../../API/Responses/Reply";
import { RepProviderConfigList } from "./RepProviderConfigList";

/**
 * A container for the requested {@link providerConfigs}.
 **/
export abstract class RepProviderConfigList extends Reply {
	/**
	 * The list of requested {@link ProviderConfig}s.
	 **/
	providerConfigs: ProviderConfig[];
	}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepProviderConfigListByCompany extends RepProviderConfigList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId;}