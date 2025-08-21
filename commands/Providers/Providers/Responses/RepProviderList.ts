import { Reply } from "../../../API/Responses/Reply";
import { RepProviderList } from "./RepProviderList";

/**
 * A container for the requested <see cref="providers"/>.
 **/
export abstract class RepProviderList extends Reply {
	/**
	 * The list of requested <see cref="Provider"/>s.
	 **/
	providers: Provider[];
	}

/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class RepProviderListByCompany extends RepProviderList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepProviderListByConfig extends RepProviderList {
	/**
	 * Identifier of the <see cref="ProviderConfig"/> (or <see cref="ProviderConfiguration"/>) to which this collection belongs.
	 **/
	config: ContentId;}