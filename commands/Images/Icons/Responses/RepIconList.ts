import { Reply } from "../../../API/Responses/Reply";
import { RepIconList } from "./RepIconList";

/**
 * A container for the requested {@link icons}.
 **/
export abstract class RepIconList extends Reply {
	/**
	 * The list of requested {@link Icon}s.
	 **/
	icons: Icon[];
	}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepIconListByCompany extends RepIconList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId;}