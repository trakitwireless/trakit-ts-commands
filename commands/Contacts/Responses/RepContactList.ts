import { Reply } from "../../API/Responses/Reply";
import { RepContactList } from "./RepContactList";

/**
 * A container for the requested <see cref="contacts"/>.
 **/
export abstract class RepContactList extends Reply {
	/**
	 * The list of requested <see cref="Contact"/>s.
	 **/
	contacts: Contact[];
	}

/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class RepContactListByCompany extends RepContactList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;}