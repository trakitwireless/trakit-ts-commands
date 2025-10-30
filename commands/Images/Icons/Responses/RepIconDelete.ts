import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";

/**
 * A container for the {@link icon}.
 **/
export class RepIconDelete extends ReplySyncDelete {
	/**
	 * Details about deleting/restoring the requested {@link Icon}.
	 **/
	icon: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.icon = ContentIdDeleted.fromJSON(json?.icon as JsonObject);
	}
}