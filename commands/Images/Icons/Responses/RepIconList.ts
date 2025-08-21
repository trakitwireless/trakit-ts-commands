import { Reply } from "../../../API/Responses/Reply";
import { RepIconList } from "./RepIconList";

/**
 * A container for the requested <see cref="icons"/>.
 **/
export abstract class RepIconList extends Reply {
	/**
	 * The list of requested <see cref="Icon"/>s.
	 **/
	icons: Icon[];
	}

/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class RepIconListByCompany extends RepIconList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;}