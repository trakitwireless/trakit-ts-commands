import { Reply } from "../../../API/Responses/Reply";
import { RepSessionList } from "./RepSessionList";

/**
 * A container for the requested <see cref="sessions"/>.
 **/
export abstract class RepSessionList extends Reply {
	/**
	 * The list of requested <see cref="Session"/>.
	 **/
	sessions: Session[];
	}

/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export abstract class RepSessionListByCompany extends RepSessionList {
	/**
	 * An object to contain the "id" of the <see cref="Company"/> to which the array of <see cref="Session"/>s belong.
	 **/
	company: ContentId;
	}
/**
 * Contains the <see cref="User.login"/> of the collection.
 **/
export abstract class RepSessionListByUser extends RepSessionList {
	/**
	 * An object to contain the "login" of the <see cref="User"/> to which the array of <see cref="Session"/>s belong.
	 **/
	user: ContentLoginCompany;}