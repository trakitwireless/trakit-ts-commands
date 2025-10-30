import { JsonObject, nothing, UserAdvanced } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link userAdvanced}.
 **/
export class RepUserAdvancedGet extends ReplySyncGet<UserAdvanced> {
	/**
	 * The requested {@link UserAdvanced}.
	 **/
	userAdvanced: UserAdvanced | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.userAdvanced) {
			this.userAdvanced = new UserAdvanced(json.userAdvanced as JsonObject);
		}
	}
}