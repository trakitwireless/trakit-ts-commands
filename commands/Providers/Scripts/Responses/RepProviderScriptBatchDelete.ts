import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link providerScript}.
 **/
export class RepProviderScriptBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link ProviderScript}.
	 **/
	providerScripts: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json, "ProviderScript");
		this.providerScripts = (json?.providerScripts as JsonObject[])?.map((v: any) => new ContentIdDeleted(v));
	}
	protected override _getKeys() { return this.providerScripts?.map(p => p.id) as ulong[]; }
}