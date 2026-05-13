import { JsonObject, nothing, ulong, User, UserGeneral } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link userGeneral}.
 */
export class RepUserGeneralGet extends ReplySyncGetPiece<UserGeneral> {
	/**
	 * The requested {@link User}.
	 */
	userGeneral: UserGeneral | nothing;

	constructor(json: JsonObject) {
		super(json, "UserGeneral", 0);
		if (json?.userGeneral) {
			this.userGeneral = new UserGeneral(json.userGeneral as JsonObject);
		}
	}
	protected override _createBlank() { return new User(); }
	override getObject() { return this.userGeneral as UserGeneral; }
	override getCompanyId() { return this.userGeneral?.companyId as ulong; }
}