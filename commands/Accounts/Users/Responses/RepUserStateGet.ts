import { JsonObject, nothing, ulong, User, UserState } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link UserState}.
 */
export class RepUserStateGet extends ReplySyncGetPiece<UserState> {
	/**
	 * The requested {@link UserState}.
	 */
	userState: UserState | nothing;

	constructor(json: JsonObject) {
		super(json, "UserState", 0);
		if (json?.userState) {
			this.userState = new UserState(json.userState as JsonObject);
		}
	}
	protected override _createBlank() { return new User(); }
	override getObject() { return this.userState as UserState; }
	override getCompanyId() { return this.userState?.companyId as ulong; }
}