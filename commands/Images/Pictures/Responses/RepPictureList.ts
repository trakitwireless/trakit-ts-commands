import { Reply } from "../../../API/Responses/Reply";
import { RepPictureList } from "./RepPictureList";

/**
 * A container for the requested {@link pictures}.
 **/
export abstract class RepPictureList extends Reply {
	/**
	 * The list of requested {@link Picture}s.
	 **/
	pictures: Picture[];
	}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepPictureListByCompany extends RepPictureList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId;}