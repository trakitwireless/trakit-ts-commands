import { Reply } from "../../../API/Responses/Reply";
import { RepProviderControlList } from "./RepProviderControlList";

/**
 * A container for the requested <see cref="providerControls"/>.
 **/
export abstract class RepProviderControlList extends Reply {
	/**
	 * The list of requested <see cref="ProviderControl"/>s.
	 **/
	providerControls: ProviderControl[];
	}

/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepProviderControlListByCompany extends RepProviderControlList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepProviderControlListByConfig extends RepProviderControlList {
	/**
	 * Identifier of the <see cref="ProviderConfig"/> (or <see cref="ProviderConfiguration"/>) to which this collection belongs.
	 **/
	config: ContentId;}