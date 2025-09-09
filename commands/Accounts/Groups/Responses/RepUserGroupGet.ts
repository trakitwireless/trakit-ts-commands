import { UserGroup } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link userGroup}.
 **/
export class RepUserGroupGet extends Reply {
	/**
	 * The requested {@link UserGroup}.
	 **/
	userGroup: UserGroup;
	
	constructor(json?: any) {
		super(json);
		this.userGroup = new UserGroup(json?.["userGroup"]);
	}
}