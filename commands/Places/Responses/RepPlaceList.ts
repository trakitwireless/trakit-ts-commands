import { Reply } from "../../API/Responses/Reply";
import { RepPlaceList } from "./RepPlaceList";

/**
 * A container for the requested <see cref="places"/>.

 **/
export abstract class RepPlaceList extends Reply {
	/**
	 * The list of requested <see cref="Place"/>s.

	 **/
	places: Place[];
	}

/**
 * Contains the <see cref="Company.id"/> of the collection.

 **/
export class RepPlaceListByCompany extends RepPlaceList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.

	 **/
	company: ContentId;}