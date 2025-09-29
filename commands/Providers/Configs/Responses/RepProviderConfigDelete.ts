import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";

/**
 * A container for the {@link providerConfig}.
 **/
export class RepProviderConfigDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link ProviderConfig}.
	 **/
	providerConfig: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.providerConfig = ContentIdDeleted.fromJSON(json?.providerConfig);
	}
}