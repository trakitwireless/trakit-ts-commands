import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";

/**
 * A container for the {@link providerConfiguration}.
 */
export class RepProviderConfigurationDelete extends ReplySyncDelete {
	/**
	 * Details about deleting/restoring the requested {@link ProviderConfiguration}.
	 */
	providerConfiguration: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json, "ProviderConfiguration");
		this.providerConfiguration = ContentIdDeleted.fromJSON(json?.providerConfiguration as JsonObject);
	}
	override getKey() { return this.providerConfiguration?.id as ulong; }
	override getCompanyId() { return this.providerConfiguration?.company as ulong; }
}