import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdendifierDeleted } from "../../../API/Responses/Content/ContentIdendifierDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";

/**
 * A container for the {@link provider}.
 **/
export class RepProviderDelete extends ReplySyncDelete {
	/**
	 * Details about deleting/restoring the requested {@link Provider}.
	 **/
	provider: ContentIdendifierDeleted | nothing;

	constructor(json: JsonObject) {
		super(json, "Provider");
		this.provider = ContentIdendifierDeleted.fromJSON(json?.provider as JsonObject);
	}
	override getKey() { return this.provider?.id as string; }
}