import { nothing, UserGroup } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { JsonObject } from "@trakit/objects";

/**
 * A container for the {@link userGroup}.
 **/
export class RepUserGroupGet extends Reply {
	/**
	 * The requested {@link UserGroup}.
	 **/
	userGroup: UserGroup | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.userGroup) {
			this.userGroup = new UserGroup(json["userGroup"]);
		}
	}
}