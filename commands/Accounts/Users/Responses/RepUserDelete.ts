import { ContentIdDeleted } from "commands/API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link user}.
 **/
export class RepUserDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link User}.
	 **/
	user: ContentIdDeleted | nothing;

	constructor(json?: any) {
		super(json);
		this.user = ContentIdDeleted.fromJSON(json?.user);
	}
}