import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";

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
		this.providerConfigs = json?.providerConfigs?.map((v: any) => new ContentIdDeleted(v));
	}
}