import { nothing, Place } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { ContentId } from "commands/API/Responses/Content/ContentId";

/**
 * A container for the requested {@link places}.
 */
export abstract class RepPlaceList extends Reply {
	/**
	 * The list of requested {@link Place}s.
	 */
	places: Place[] | nothing;

	constructor(json?: any) {
		super(json);
		this.places = json?.places?.map((item: any) => new Place(item));
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

	constructor(json?: any) {
		super(json);
		this.company = ContentId.fromJSON(json?.company);
	}
}