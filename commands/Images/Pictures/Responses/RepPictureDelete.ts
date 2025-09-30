import { nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link picture}.
 **/
export class RepPictureDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link Picture}.
	 **/
	picture: ContentIdDeleted | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.picture = ContentIdDeleted.fromJSON(json?.picture as JsonObject);
	}
}