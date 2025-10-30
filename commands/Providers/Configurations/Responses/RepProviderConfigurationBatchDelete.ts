import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link providerConfiguration}.
 **/
export class RepProviderConfigurationBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link ProviderConfiguration}.
	 **/
	providerConfigurations: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json, "ProviderConfiguration");
		this.providerConfigurations = (json?.providerConfigurations as JsonObject[])?.map((v: any) => new ContentIdDeleted(v));
	}
	protected override _getKeys() { return this.providerConfigurations?.map((e) => e.id) as ulong[]; }
}