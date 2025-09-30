import { Dashcam, JsonObject, nothing } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { Reply } from "../../../API/Responses/Reply";
/**
 * A container for the requested {@link dashcams}.
 **/
export abstract class RepDashcamList extends Reply {
	/**
	 * The list of requested {@link Dashcam}s.
	 **/
	dashcams: Dashcam[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.dashcams = (json?.dashcams as JsonObject[])?.map((d: any) => new Dashcam(d));
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepDashcamListByCompany extends RepDashcamList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
}