import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";

/**
 * A container for the {@link providerConfig}.
 **/
export class RepProviderConfigDelete extends ReplySyncDelete {
	/**
	 * Details about deleting/restoring the requested {@link ProviderConfig}.
	 **/
	providerConfig: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.providerConfig = ContentIdDeleted.fromJSON(json?.providerConfig as JsonObject);
	}
}