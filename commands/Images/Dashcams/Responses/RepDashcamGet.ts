import { Dashcam, JsonObject, nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link dashcam}.
 **/
export class RepDashcamGet extends Reply {
	/**
	 * The requested {@link Dashcam}.
	 **/
	dashcam: Dashcam | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.dashcam) {
			this.dashcam = Dashcam.fromJSON(json.dashcam as JsonObject);
		}
	}
}