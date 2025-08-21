import { Reply } from "../../../API/Responses/Reply";
import { RepProviderRegistrationList } from "./RepProviderRegistrationList";

/**
 * A container for the requested <see cref="providerRegistrations"/>.
 **/
export abstract class RepProviderRegistrationList extends Reply {
	/**
	 * The list of requested <see cref="ProviderRegistration"/>s.
	 **/
	providerRegistrations: ProviderRegistration[];
	}

/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class RepProviderRegistrationListByCompany extends RepProviderRegistrationList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;}