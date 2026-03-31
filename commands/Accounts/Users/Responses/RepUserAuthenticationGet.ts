import { JsonObject, nothing, ulong, User, UserAuthentication } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link UserAuthentication}.
 */
export class RepUserAuthenticationGet extends ReplySyncGetPiece<UserAuthentication> {
	/**
	 * The requested {@link UserAuthentication}.
	 */
	userAuthentication: UserAuthentication | nothing;

	constructor(json: JsonObject) {
		super(json, "UserAuthentication", 0);
		if (json?.userAuthentication) {
			this.userAuthentication = new UserAuthentication(json.userAuthentication as JsonObject);
		}
	}
	protected override _createBlank() { return new User(); }
	override getObject() { return this.userAuthentication as UserAuthentication; }
	override getCompanyId() { return this.userAuthentication?.companyId as ulong; }
}