import { Reply } from "../../../API/Responses/Reply";
import { RepProviderList } from "./RepProviderList";

/**
 * A container for the requested @link {providers}.
 **/
export abstract class RepProviderList extends Reply {
	/**
	 * The list of requested @link {Provider}s.
	 **/
	providers: Provider[];
	}

/**
 * Contains the @link {Company.id} of the collection.
 **/
export class RepProviderListByCompany extends RepProviderList {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * A container owner @link {Company} of the collection.
 **/
export class RepProviderListByConfig extends RepProviderList {
	/**
	 * Identifier of the @link {ProviderConfig} (or @link {ProviderConfiguration}) to which this collection belongs.
	 **/
	config: ContentId;}