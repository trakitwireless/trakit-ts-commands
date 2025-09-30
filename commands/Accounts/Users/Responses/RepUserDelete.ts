import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link user}.
 **/
export class RepUserDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link User}.
	 **/
	user: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.user = ContentIdDeleted.fromJSON(json?.user as JsonObject);
	}
}