import { JsonObject } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepSessionGet } from "../Responses/RepSessionGet";
import { ParamHandle } from "./Parameters/ParamHandle";

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
		this.session = new ParamHandle(json?.session as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepSessionGet(json as JsonObject);
	}
}