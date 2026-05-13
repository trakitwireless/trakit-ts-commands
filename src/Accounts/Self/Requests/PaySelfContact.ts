import { JsonObject, SyncName } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { ParamSelfContactMerge } from "./Parameters/ParamSelfContactMerge";

/**
 * 
 */
export class PaySelfContact extends Payload {
	/**
	 * 
	 */
	contact: ParamSelfContactMerge;

	constructor(json?: JsonObject) {
		super();
		this.contact = new ParamSelfContactMerge(json?.contact as JsonObject);
	}

	override getAction(): {
		kind: "Merge",
		object: SyncName,
		filter: "Contact",
		batch: false,
	} {
		return {
			kind: "Merge",
			object: "Self" as SyncName,
			filter: "Contact",
			batch: false,
		};
	}

	override createReply(json: JsonObject): Reply {
		return new Reply(json);
	}

	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			contact: this.contact.toJSON(),
		};
	}
}