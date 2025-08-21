import { Reply } from "../../../API/Responses/Reply";
import { RepProviderGeneralList } from "./RepProviderGeneralList";

/**
 * A container for the requested <see cref="providerGenerals"/>.
 **/
export abstract class RepProviderGeneralList extends Reply {
	/**
	 * The list of requested <see cref="ProviderGeneral"/>s.
	 **/
	providerGenerals: ProviderGeneral[];
	}

/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepProviderGeneralListByCompany extends RepProviderGeneralList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepProviderGeneralListByConfig extends RepProviderGeneralList {
	/**
	 * Identifier of the <see cref="ProviderConfig"/> (or <see cref="ProviderConfiguration"/>) to which this collection belongs.
	 **/
	config: ContentId;}