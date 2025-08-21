import { Reply } from "../../API/Responses/Reply";
import { RepPlaceList } from "./RepPlaceList";

/**
 * A container for the requested @link {places}.

 **/
export abstract class RepPlaceList extends Reply {
	/**
	 * The list of requested @link {Place}s.

	 **/
	places: Place[];
	}

/**
 * Contains the @link {Company.id} of the collection.

 **/
export class RepPlaceListByCompany extends RepPlaceList {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.

	 **/
	company: ContentId;}