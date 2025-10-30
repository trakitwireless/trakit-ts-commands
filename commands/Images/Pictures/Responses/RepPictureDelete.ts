import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";

/**
 * A container for the {@link picture}.
 **/
export class RepPictureDelete extends ReplySyncDelete {
	/**
	 * Details about deleting/restoring the requested {@link Picture}.
	 **/
	picture: ContentIdDeleted | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.picture = ContentIdDeleted.fromJSON(json?.picture as JsonObject);
	}
}