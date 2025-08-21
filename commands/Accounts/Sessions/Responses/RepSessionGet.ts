import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the <see cref="User"/> of the current session.
 **/
export class RepSessionGet extends Reply {
	/**
	 * The requested <see cref="Session"/> details.
	 **/
	session: Session;}