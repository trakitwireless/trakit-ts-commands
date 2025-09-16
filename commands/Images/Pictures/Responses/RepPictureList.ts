import { nothing, Picture } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentId } from "commands/API/Responses/Content/ContentId";

/**
 * A container for the requested {@link pictures}.
 **/
export abstract class RepPictureList extends Reply {
	/**
	 * The list of requested {@link Picture}s.
	 **/
	pictures: Picture[] | nothing;
	
	constructor(json: any) {
		super(json);
		this.pictures = json?.pictures?.map((i: any) => new Picture(i));
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepPictureListByCompany extends RepPictureList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;
	
	constructor(json: any) {
		super(json);
		this.company = ContentId.fromJSON(json?.company);
	}
}