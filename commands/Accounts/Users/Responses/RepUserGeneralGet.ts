import { UserGeneral } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link userGeneral}.
 **/
export class RepUserGeneralGet extends Reply {
	/**
	 * The requested {@link User}.
	 **/
	userGeneral: UserGeneral;

	constructor(json?: any) {
		super(json);
		this.userGeneral = new UserGeneral(json?.userGeneral);
	}
}