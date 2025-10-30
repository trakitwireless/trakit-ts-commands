import { JsonObject } from "@trakit/objects";
import { nothing } from "@trakit/objects";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";
import { ContentIdendifierDeleted } from "../../../API/Responses/Content/ContentIdendifierDeleted";

/**
 * A container for the {@link provider}.
 **/
export class RepProviderDelete extends ReplySyncDelete {
	/**
	 * Details about deleting/restoring the requested {@link Provider}.
	 **/
	provider: ContentIdendifierDeleted | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.provider = ContentIdendifierDeleted.fromJSON(json?.provider as JsonObject);
	}
}