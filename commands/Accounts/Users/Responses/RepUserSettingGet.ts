import { JsonObject, nothing, ulong, User, UserSetting } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link userGeneral}.
 */
export class RepUserSettingGet extends ReplySyncGetPiece<UserSetting> {
	/**
	 * The requested {@link UserSetting}.
	 */
	userSetting: UserSetting | nothing;

	constructor(json: JsonObject) {
		super(json, "UserSetting", 0);
		if (json?.userSetting) {
			this.userSetting = new UserSetting(json.userSetting as JsonObject);
		}
	}
	protected override _createBlank() { return new User(); }
	override getObject() { return this.userSetting as UserSetting; }
	override getCompanyId() { return this.userSetting?.companyId as ulong; }
}