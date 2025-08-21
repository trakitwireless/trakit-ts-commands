import { Reply } from "../../../API/Responses/Reply";
import { RepPictureList } from "./RepPictureList";

/**
 * A container for the requested <see cref="pictures"/>.
 **/
export abstract class RepPictureList extends Reply {
	/**
	 * The list of requested <see cref="Picture"/>s.
	 **/
	pictures: Picture[];
	}

/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class RepPictureListByCompany extends RepPictureList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;}