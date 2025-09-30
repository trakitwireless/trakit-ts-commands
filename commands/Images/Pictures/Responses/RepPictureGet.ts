import { JsonObject, nothing, Picture } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link picture}.
 **/
export class RepPictureGet extends Reply {
	/**
	 * The requested {@link Picture}.
	 **/
	picture: Picture | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.picture) {
			this.picture = new Picture(json.picture as JsonObject);
		}
	}
}