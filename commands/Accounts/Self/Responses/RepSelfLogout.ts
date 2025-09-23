import { guid, nothing, utility } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * The response for a logout operation which is always successful.
 **/
export class RepSelfLogout extends Reply {
	/**
	 * Your old, no longer valid, session identifier.
	 **/
	ghostId: guid | nothing;
	/**
	 * The timestamp from when your session expired.
	 **/
	expiry: Date;

	constructor(json: any) {
		super(json);
		this.ghostId = json?.ghostId ?? "";
		this.expiry = utility.date(json?.expiry);
	}
}