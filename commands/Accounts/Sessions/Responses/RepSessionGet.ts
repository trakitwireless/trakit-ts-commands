import { JsonObject, Session, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link User} of the current session.
 **/
export class RepSessionGet extends ReplySyncGet<Session> {
	/**
	 * The requested {@link Session} details.
	 **/
	session: Session;

	constructor(json: JsonObject) {
		super(json, "Session");
		this.session = new Session(json?.session as JsonObject);
	}
	override getObject() { return this.session as Session; }
	override getCompanyId() { return this.session?.companyId as ulong; }
}