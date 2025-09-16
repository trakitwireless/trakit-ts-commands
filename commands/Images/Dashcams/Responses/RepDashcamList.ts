import { ContentId } from "commands/API/Responses/Content/ContentId";
import { Reply } from "../../../API/Responses/Reply";
import { Dashcam, nothing } from "@trakit/objects";
/**
 * A container for the requested {@link dashcams}.
 **/
export abstract class RepDashcamList extends Reply {
	/**
	 * The list of requested {@link Dashcam}s.
	 **/
	dashcams: Dashcam[] | nothing;

	constructor(json: any) {
		super(json);
		this.dashcams = json?.dashcams?.map((d: any) => new Dashcam(d));
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

	constructor(json: any) {
		super(json);
		this.company = ContentId.fromJSON(json?.company);
	}
}