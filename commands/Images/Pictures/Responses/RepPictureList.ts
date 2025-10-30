import { JsonObject, nothing, Picture } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link pictures}.
 **/
export abstract class RepPictureList extends ReplySyncList<Picture> {
	/**
	 * The list of requested {@link Picture}s.
	 **/
	pictures: Picture[] | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.pictures = (json?.pictures as JsonObject[])?.map((i: any) => new Picture(i));
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
	
	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
}