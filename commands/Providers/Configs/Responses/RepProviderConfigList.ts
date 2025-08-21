import { Reply } from "../../../API/Responses/Reply";
import { RepProviderConfigList } from "./RepProviderConfigList";

/**
 * A container for the requested <see cref="providerConfigs"/>.
 **/
export abstract class RepProviderConfigList extends Reply {
	/**
	 * The list of requested <see cref="ProviderConfig"/>s.
	 **/
	providerConfigs: ProviderConfig[];
	}

/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class RepProviderConfigListByCompany extends RepProviderConfigList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;}