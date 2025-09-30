import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link providerConfiguration}.
 **/
export class RepProviderConfigurationBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link ProviderConfiguration}.
	 **/
	providerConfigurations: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.providerConfigurations = (json?.providerConfigurations as JsonObject[])?.map((v: any) => new ContentIdDeleted(v));
	}
}