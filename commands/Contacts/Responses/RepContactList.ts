import { Reply } from "../../API/Responses/Reply";
import { RepContactList } from "./RepContactList";

/**
 * A container for the requested @link {contacts}.
 **/
export abstract class RepContactList extends Reply {
	/**
	 * The list of requested @link {Contact}s.
	 **/
	contacts: Contact[];
	}

/**
 * Contains the @link {Company.id} of the collection.
 **/
export class RepContactListByCompany extends RepContactList {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ContentId;}