import { Reply } from "../../../API/Responses/Reply";
import { RepProviderRegistrationList } from "./RepProviderRegistrationList";

/**
 * A container for the requested @link {providerRegistrations}.
 **/
export abstract class RepProviderRegistrationList extends Reply {
	/**
	 * The list of requested @link {ProviderRegistration}s.
	 **/
	providerRegistrations: ProviderRegistration[];
	}

/**
 * Contains the @link {Company.id} of the collection.
 **/
export class RepProviderRegistrationListByCompany extends RepProviderRegistrationList {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ContentId;}