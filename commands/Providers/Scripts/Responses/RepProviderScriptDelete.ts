import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";

/**
 * A container for the {@link providerScript}.
 **/
export class RepProviderScriptDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link ProviderScript}.
	 **/
	providerScript: ContentIdDeleted | nothing;

	constructor(json: any) {
		super(json);
		this.providerScript = ContentIdDeleted.fromJSON(json?.providerScript);
	}
}