import { JsonObject, nothing, UserAdvanced } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link userAdvanced}.
 **/
export class RepUserAdvancedGet extends Reply {
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