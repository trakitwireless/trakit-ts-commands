import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the @link {providerRegistration}.
 **/
export class RepProviderRegistrationBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested @link {ProviderRegistration}.
	 **/
	providerRegistrations: ContentCodeDeleted[];}