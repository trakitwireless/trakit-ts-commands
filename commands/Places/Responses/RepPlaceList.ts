import { JsonObject, nothing, Place } from "@trakit/objects";
import { ContentId } from "../../API/Responses/Content/ContentId";
import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the requested {@link places}.
 */
export abstract class RepPlaceList extends Reply {
	/**
	 * The list of requested {@link Place}s.
	 */
	places: Place[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.places = (json?.places as JsonObject[])?.map((item: any) => new Place(item));
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 */
export class RepPlaceListByCompany extends RepPlaceList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 */
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
}