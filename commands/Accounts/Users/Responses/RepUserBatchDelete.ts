import { ContentIdDeleted } from "commands/API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link user}.
 **/
export class RepUserBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link User}.
	 **/
	users: ContentIdDeleted[];

	constructor(json?: any) {
		super(json);
		this.users = json?.users?.map((u: any) => new ContentIdDeleted(u));
	}
}