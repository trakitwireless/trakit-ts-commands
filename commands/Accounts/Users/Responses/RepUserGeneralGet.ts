import { nothing, UserGeneral } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link userGeneral}.
 **/
export class RepUserGeneralGet extends Reply {
	/**
	 * The requested {@link User}.
	 **/
	userGeneral: UserGeneral | nothing;

	constructor(json?: any) {
		super(json);
		if (json?.userGeneral) {
			this.userGeneral = new UserGeneral(json.userGeneral);
		}
	}
}