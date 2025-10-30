import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";

/**
 * A container for the {@link providerScript}.
 **/
export class RepProviderScriptBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link ProviderScript}.
	 **/
	providerScripts: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.providerScripts = (json?.providerScripts as JsonObject[])?.map((v: any) => new ContentIdDeleted(v));
	}
}