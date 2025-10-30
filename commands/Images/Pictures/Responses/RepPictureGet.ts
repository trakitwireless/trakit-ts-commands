import { JsonObject, nothing, Picture } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link picture}.
 **/
export class RepPictureGet extends ReplySyncGet<Picture> {
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