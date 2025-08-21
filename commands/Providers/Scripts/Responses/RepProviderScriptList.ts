import { Reply } from "../../../API/Responses/Reply";
import { RepProviderScriptList } from "./RepProviderScriptList";

/**
 * A container for the requested @link {providerScripts}.
 **/
export abstract class RepProviderScriptList extends Reply {
	/**
	 * The list of requested @link {ProviderScript}s.
	 **/
	providerScripts: ProviderScript[];
	}

/**
 * Contains the @link {Company.id} of the collection.
 **/
export class RepProviderScriptListByCompany extends RepProviderScriptList {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ContentId;}