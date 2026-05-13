import { JsonObject, ulong } from "@trakit/objects";
import { nothing, User } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link user}.
 */
export class RepUserGet extends ReplySyncGet<User> {
	/**
	 * The requested {@link User}.
	 */
	user: User | nothing;

	constructor(json: JsonObject) {
		super(json, "User");
		if (json?.user) {
			this.user = new User(json.user as JsonObject);
		}
	}
	override getObject() { return this.user as User; }
	override getCompanyId() { return this.user?.companyId as ulong; }
}