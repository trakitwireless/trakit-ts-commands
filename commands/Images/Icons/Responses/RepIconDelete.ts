import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link icon}.
 **/
export class RepIconDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link Icon}.
	 **/
	icon: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.icon = ContentIdDeleted.fromJSON(json?.icon as JsonObject);
	}
}