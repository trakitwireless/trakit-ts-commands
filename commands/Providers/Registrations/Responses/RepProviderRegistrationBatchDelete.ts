import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentCodeDeleted } from "../../../API/Responses/Content/ContentCodeDeleted";

/**
 * A container for the {@link providerRegistration}.
 **/
export class RepProviderRegistrationBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link ProviderRegistration}.
	 **/
	providerRegistrations: ContentCodeDeleted[] | nothing;

	constructor(json: any) {
		super(json);
		this.providerRegistrations = json?.providerRegistrations?.map((v: any) => new ContentCodeDeleted(v));
	}
}