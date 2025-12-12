import { JsonObject, ulong } from "@trakit/objects";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";
import { SessionHandle } from "./Content/SessionHandle";

/**
 * A container for the {@link User} of the current session.
 **/
export class RepSessionDelete extends ReplySyncDelete {
	/**
	 * An object which contains the {@link Session.handle}, related {@link User.login}, and owning {@link User.company} id.
	 **/
	session: SessionHandle;

	constructor(json: JsonObject) {
		super(json, "Session");
		this.session = new SessionHandle(json?.session as JsonObject);
	}
	override getKey() { return this.session?.handle as string; }
	override getCompanyId() { return this.session?.company as ulong; }
}