import { JsonObject, nothing, Place } from "@trakit/objects";
import { ReplySyncGet } from "../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link place}.
 */
export class RepPlaceGet extends ReplySyncGet<Place> {
	/**
	 * The requested {@link Place}.
	 */
	place: Place | nothing;
	
	constructor(json: JsonObject) {
		super(json, "Place");
		if (json?.place) {
			this.place = new Place(json.place as JsonObject);
		}
	}
	override getObject() { return this.place as Place; }
}