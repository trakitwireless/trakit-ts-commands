import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the <see cref="User"/> of the current session.
 **/
export class RepSessionDelete extends Reply {
	/**
	 * An object which contains the <see cref="Session.handle"/>, related <see cref="User.login"/>, and owning <see cref="User.company"/> id.
	 **/
	session: SessionHandle;}