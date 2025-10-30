import { JsonObject, nothing, User, UserGeneral } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link userGeneral}.
 **/
export class RepUserGeneralGet extends ReplySyncGetPiece<UserGeneral> {
	/**
	 * The requested {@link User}.
	 **/
	userGeneral: UserGeneral | nothing;

	constructor(json: JsonObject) {
		super(json, "UserGeneral", 0);
		if (json?.userGeneral) {
			this.userGeneral = new UserGeneral(json.userGeneral as JsonObject);
		}
	}
	override getObject() { return this.userGeneral as UserGeneral; }
	protected override _createBlank() { return new User(); }
}