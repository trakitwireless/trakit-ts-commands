import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { ParamHandle } from "./Parameters/ParamHandle";
import { RepSessionGet } from "../Responses/RepSessionGet";

/**
 * Gets details of the specified {@link Session}.
 **/
export class PaySessionGet extends Payload {
	/**
	 * An object to contain the "handle" of the {@link Session}.
	 **/
	session: ParamHandle;

	constructor(json?: JsonObject) {
		super(json);
		this.session = new ParamHandle(json?.session);
	}

	override createReply(json?: JsonObject): Reply {
		return new RepSessionGet(json);
	}
}