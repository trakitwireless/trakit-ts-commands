import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link providerConfig}.
 */
export class RepProviderConfigBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link ProviderConfig}.
	 */
	providerConfigs: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json, "ProviderConfig");
		this.providerConfigs = (json?.providerConfigs as JsonObject[])?.map((v: any) => new ContentIdDeleted(v));
	}
	protected override _getKeys() { return this.providerConfigs?.map(p => p.id) as ulong[]; }
	override getCompanyId() { return this.providerConfigs?.[0]?.company as ulong; }
	override getResults() { return this.providerConfigs as ContentIdDeleted[]; }
}