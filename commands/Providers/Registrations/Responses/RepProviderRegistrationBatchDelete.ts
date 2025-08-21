import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the <see cref="providerRegistration"/>.
 **/
export class RepProviderRegistrationBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested <see cref="ProviderRegistration"/>.
	 **/
	providerRegistrations: ContentCodeDeleted[];}