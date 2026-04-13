import { JsonObject, nothing, ulong, User, UserState } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link userGeneral}.
 */
export class RepUserStateGet extends ReplySyncGetPiece<UserState> {
	/**
	 * The requested {@link UserState}.
	 */
	userSetting: UserState | nothing;

	constructor(json: JsonObject) {
		super(json, "UserState", 0);
		if (json?.userSetting) {
			this.userSetting = new UserState(json.userSetting as JsonObject);
		}
	}
	protected override _createBlank() { return new User(); }
	override getObject() { return this.userSetting as UserState; }
	override getCompanyId() { return this.userSetting?.companyId as ulong; }
}