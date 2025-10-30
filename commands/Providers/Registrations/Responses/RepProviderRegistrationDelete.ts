import { JsonObject } from "@trakit/objects";
import { nothing } from "@trakit/objects";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";

/**
 * A container for the {@link providerRegistration}.
 **/
export class RepProviderRegistrationDelete extends ReplySyncDelete {
	/**
	 * Details about deleting/restoring the requested {@link ProviderRegistration}.
	 **/
	providerRegistration: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.providerRegistration = ContentIdDeleted.fromJSON(json?.providerRegistration as JsonObject);
	}
}