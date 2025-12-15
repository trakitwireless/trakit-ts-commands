import { codified, email, guid, JsonObject, nothing, Place, ulong } from "@trakit/objects";
import { ContentId } from "../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link places}.
 */
export abstract class RepPlaceList extends ReplySyncList<Place> {
	/**
	 * The list of requested {@link Place}s.
	 */
	places: Place[] | nothing;

	constructor(json: JsonObject) {
		super(json, "Place");
		this.places = (json?.places as JsonObject[])?.map((item: any) => new Place(item));
	}
	override getList() { return this.places as Place[]; }
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
	override _filterCollection(pair: [ulong | guid | email | codified | string, Place], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
	}
	override getCompanyId() { return this.company?.id as ulong; }
}