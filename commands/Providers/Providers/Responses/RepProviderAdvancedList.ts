import { Reply } from "../../../API/Responses/Reply";
import { RepProviderAdvancedList } from "./RepProviderAdvancedList";

/**
 * A container for the requested @link {providerAdvanceds}.
 **/
export abstract class RepProviderAdvancedList extends Reply {
	/**
	 * The list of requested @link {ProviderAdvanced}s.
	 **/
	providerAdvanceds: ProviderAdvanced[];
	}

/**
 * A container owner @link {Company} of the collection.
 **/
export class RepProviderAdvancedListByCompany extends RepProviderAdvancedList {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * A container owner @link {Company} of the collection.
 **/
export class RepProviderAdvancedListByConfig extends RepProviderAdvancedList {
	/**
	 * Identifier of the @link {ProviderConfig} (or @link {ProviderConfiguration}) to which this collection belongs.
	 **/
	config: ContentId;}