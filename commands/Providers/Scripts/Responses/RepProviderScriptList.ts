import { Reply } from "../../../API/Responses/Reply";
import { RepProviderScriptList } from "./RepProviderScriptList";

/**
 * A container for the requested <see cref="providerScripts"/>.
 **/
export abstract class RepProviderScriptList extends Reply {
	/**
	 * The list of requested <see cref="ProviderScript"/>s.
	 **/
	providerScripts: ProviderScript[];
	}

/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class RepProviderScriptListByCompany extends RepProviderScriptList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;}