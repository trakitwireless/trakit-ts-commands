import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link providerConfig}.
 **/
export class RepProviderConfigBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link ProviderConfig}.
	 **/
	providerConfigs: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.providerConfigs = (json?.providerConfigs as JsonObject[])?.map((v: any) => new ContentIdDeleted(v));
	}
}