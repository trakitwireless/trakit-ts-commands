import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";

/**
 * A container for the {@link providerScript}.
 **/
export class RepProviderScriptBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link ProviderScript}.
	 **/
	providerScripts: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.providerScripts = json?.providerScripts?.map((v: any) => new ContentIdDeleted(v));
	}
}