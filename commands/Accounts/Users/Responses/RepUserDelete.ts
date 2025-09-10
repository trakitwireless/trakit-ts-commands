import { ContentIdDeleted } from "commands/API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link user}.
 **/
export class RepUserDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link User}.
	 **/
	user: ContentIdDeleted;

	constructor(json?: any) {
		super(json);
		this.user = new ContentIdDeleted(json?.user);
	}
}