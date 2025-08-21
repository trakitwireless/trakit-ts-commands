import { Reply } from "../../../API/Responses/Reply";
import { RepSessionList } from "./RepSessionList";

/**
 * A container for the requested @link {sessions}.
 **/
export abstract class RepSessionList extends Reply {
	/**
	 * The list of requested @link {Session}.
	 **/
	sessions: Session[];
	}

/**
 * Contains the @link {Company.id} of the collection.
 **/
export abstract class RepSessionListByCompany extends RepSessionList {
	/**
	 * An object to contain the "id" of the @link {Company} to which the array of @link {Session}s belong.
	 **/
	company: ContentId;
	}
/**
 * Contains the @link {User.login} of the collection.
 **/
export abstract class RepSessionListByUser extends RepSessionList {
	/**
	 * An object to contain the "login" of the @link {User} to which the array of @link {Session}s belong.
	 **/
	user: ContentLoginCompany;}