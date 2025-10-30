import { JsonObject, ulong } from "@trakit/objects";
import { nothing } from "@trakit/objects";
import { ReplySyncDelete } from "../../API/Responses/ReplySyncDelete";
import { ContentIdDeleted } from "../../API/Responses/Content/ContentIdDeleted";

/**
 * A container for the {@link place}.
 */
export class RepPlaceDelete extends ReplySyncDelete {
	/**
	 * Details about deleting/restoring the requested {@link Place}.
	 */
	place: ContentIdDeleted | nothing;
	
	constructor(json: JsonObject) {
		super(json, "Place");
		this.place = ContentIdDeleted.fromJSON(json?.place as JsonObject);
	}
	protected override _getKey() { return this.place?.id as ulong; }
}