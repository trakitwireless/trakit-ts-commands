import { nothing, Place } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the {@link place}.
 */
export class RepPlaceGet extends Reply {
	/**
	 * The requested {@link Place}.
	 */
	place: Place | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.place = json?.place
			? new Place(json.place)
			: null;
	}
}