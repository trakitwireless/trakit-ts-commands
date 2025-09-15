import { nothing } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { ContentIdDeleted } from "commands/API/Responses/Content/ContentIdDeleted";

/**
 * A container for the {@link place}.
 */
export class RepPlaceDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link Place}.
	 */
	place: ContentIdDeleted | nothing;
	
	constructor(json?: any) {
		super(json);
		this.place = ContentIdDeleted.fromJSON(json?.place);
	}
}