import { Reply } from "../../../API/Responses/Reply";
import { RepUserList } from "./RepUserList";

/**
 * A container for the requested <see cref="users"/>.
 **/
export abstract class RepUserList extends Reply {
	/**
	 * The list of requested <see cref="User"/>s.
	 **/
	users: User[];
	}

/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class RepUserListByCompany extends RepUserList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;}