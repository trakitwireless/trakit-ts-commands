import { JsonObject, nothing, UserGeneral } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link userGeneral}.
 **/
export class RepUserGeneralGet extends ReplySyncGet<UserGeneral> {
	/**
	 * The requested {@link User}.
	 **/
	userGeneral: UserGeneral | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.userGeneral) {
			this.userGeneral = new UserGeneral(json.userGeneral as JsonObject);
		}
	}
}