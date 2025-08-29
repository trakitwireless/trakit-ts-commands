import { Reply } from "../../../API/Responses/Reply";

/**
 * The response for a logout operation which is always successful.
 **/
export class RepSelfLogout extends Reply {
	/**
	 * Your old, no longer valid, session identifier.
	 **/
	ghostId!: string;
	/**
	 * The timestamp from when your session expired.
	 **/
	expiry!: Date | undefined;
}