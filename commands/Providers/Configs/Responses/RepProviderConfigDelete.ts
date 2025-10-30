import { JsonObject, nothing, ulong } from "@trakit/objects";
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
		super(json, "ProviderConfig");
		this.providerConfig = ContentIdDeleted.fromJSON(json?.providerConfig as JsonObject);
	}
	protected override _getKey() { return this.providerConfig?.id as ulong; }
}