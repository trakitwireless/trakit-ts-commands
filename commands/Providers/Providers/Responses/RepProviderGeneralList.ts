import { Reply } from "../../../API/Responses/Reply";
import { RepProviderGeneralList } from "./RepProviderGeneralList";

/**
 * A container for the requested {@link providerGenerals}.
 **/
export abstract class RepProviderGeneralList extends Reply {
	/**
	 * The list of requested {@link ProviderGeneral}s.
	 **/
	providerGenerals: ProviderGeneral[];
	}

/**
 * A container owner {@link Company} of the collection.
 **/
export class RepProviderGeneralListByCompany extends RepProviderGeneralList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * A container owner {@link Company} of the collection.
 **/
export class RepProviderGeneralListByConfig extends RepProviderGeneralList {
	/**
	 * Identifier of the {@link ProviderConfig} (or {@link ProviderConfiguration}) to which this collection belongs.
	 **/
	config: ContentId;}