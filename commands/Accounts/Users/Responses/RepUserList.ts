import { Reply } from "../../../API/Responses/Reply";
import { RepUserList } from "./RepUserList";

/**
 * A container for the requested @link {users}.
 **/
export abstract class RepUserList extends Reply {
	/**
	 * The list of requested @link {User}s.
	 **/
	users: User[];
	}

/**
 * Contains the @link {Company.id} of the collection.
 **/
export class RepUserListByCompany extends RepUserList {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ContentId;}