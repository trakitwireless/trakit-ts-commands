import { JsonObject, nothing, ulong, UserGroup } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link userGroup}.
 */
export class RepUserGroupGet extends ReplySyncGet<UserGroup> {
	/**
	 * The requested {@link UserGroup}.
	 */
	userGroup: UserGroup | nothing;

	constructor(json: JsonObject) {
		super(json, "UserGroup");
		if (json?.userGroup) {
			this.userGroup = new UserGroup(json?.userGroup as JsonObject);
		}
	}
	override getObject(): UserGroup { return this.userGroup as UserGroup; }
	override getCompanyId() { return this.userGroup?.companyId as ulong; }
}