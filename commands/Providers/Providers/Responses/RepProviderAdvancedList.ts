import { Reply } from "../../../API/Responses/Reply";
import { RepProviderAdvancedList } from "./RepProviderAdvancedList";

/**
 * A container for the requested <see cref="providerAdvanceds"/>.
 **/
export abstract class RepProviderAdvancedList extends Reply {
	/**
	 * The list of requested <see cref="ProviderAdvanced"/>s.
	 **/
	providerAdvanceds: ProviderAdvanced[];
	}

/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepProviderAdvancedListByCompany extends RepProviderAdvancedList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepProviderAdvancedListByConfig extends RepProviderAdvancedList {
	/**
	 * Identifier of the <see cref="ProviderConfig"/> (or <see cref="ProviderConfiguration"/>) to which this collection belongs.
	 **/
	config: ContentId;}