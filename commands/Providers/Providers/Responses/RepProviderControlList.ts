import { Reply } from "../../../API/Responses/Reply";
import { RepProviderControlList } from "./RepProviderControlList";

/**
 * A container for the requested @link {providerControls}.
 **/
export abstract class RepProviderControlList extends Reply {
	/**
	 * The list of requested @link {ProviderControl}s.
	 **/
	providerControls: ProviderControl[];
	}

/**
 * A container owner @link {Company} of the collection.
 **/
export class RepProviderControlListByCompany extends RepProviderControlList {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * A container owner @link {Company} of the collection.
 **/
export class RepProviderControlListByConfig extends RepProviderControlList {
	/**
	 * Identifier of the @link {ProviderConfig} (or @link {ProviderConfiguration}) to which this collection belongs.
	 **/
	config: ContentId;}