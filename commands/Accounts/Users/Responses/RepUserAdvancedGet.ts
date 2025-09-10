import { UserAdvanced } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link userAdvanced}.
 **/
export class RepUserAdvancedGet extends Reply {
	/**
	 * The requested {@link UserAdvanced}.
	 **/
	userAdvanced: UserAdvanced;

	constructor(json?: any) {
		super(json);
		this.userAdvanced = new UserAdvanced(json?.userAdvanced);
	}
}