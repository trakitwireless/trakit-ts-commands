import { JsonObject, nothing, User, UserAdvanced } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link userAdvanced}.
 **/
export class RepUserAdvancedGet extends ReplySyncGetPiece<UserAdvanced> {
	/**
	 * The requested {@link UserAdvanced}.
	 **/
	userAdvanced: UserAdvanced | nothing;

	constructor(json: JsonObject) {
		super(json, "UserAdvanced", 1);
		if (json?.userAdvanced) {
			this.userAdvanced = new UserAdvanced(json.userAdvanced as JsonObject);
		}
	}
	override getObject() { return this.userAdvanced as UserAdvanced; }
	protected override _createBlank() { return new User(); }
}