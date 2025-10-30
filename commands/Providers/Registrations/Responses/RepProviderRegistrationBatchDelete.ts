import { JsonObject } from "@trakit/objects";
import { nothing } from "@trakit/objects";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";
import { ContentCodeDeleted } from "../../../API/Responses/Content/ContentCodeDeleted";

/**
 * A container for the {@link providerRegistration}.
 **/
export class RepProviderRegistrationBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link ProviderRegistration}.
	 **/
	providerRegistrations: ContentCodeDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.providerRegistrations = (json?.providerRegistrations as JsonObject[])?.map((v: any) => new ContentCodeDeleted(v));
	}
}