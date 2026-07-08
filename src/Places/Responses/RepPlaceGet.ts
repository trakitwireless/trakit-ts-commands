import { JsonObject, nothing, Place, ulong } from "@trakit/objects";
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
		const place = (json?.place || json?.placeGeneral) as JsonObject | nothing;
		if (place) {
			this.place = new Place(place);
		}
	}
	override getObject() { return this.place as Place; }
	override getCompanyId() { return this.place?.companyId as ulong; }
}