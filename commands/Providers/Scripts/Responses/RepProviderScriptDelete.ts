import { JsonObject, ulong } from "@trakit/objects";
import { nothing } from "@trakit/objects";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";

/**
 * A container for the {@link providerScript}.
 **/
export class RepProviderScriptDelete extends ReplySyncDelete {
	/**
	 * Details about deleting/restoring the requested {@link ProviderScript}.
	 **/
	providerScript: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json, "ProviderScript");
		this.providerScript = ContentIdDeleted.fromJSON(json?.providerScript as JsonObject);
	}
	protected override _getKey() { return this.providerScript?.id as ulong; }
}