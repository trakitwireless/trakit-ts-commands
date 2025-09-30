import { JsonObject } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepSelfContact } from "../Responses/RepSelfContact";
import { ParamSelfContactMerge } from "./Parameters/ParamSelfContactMerge";

/**
 * 
 **/
export class PaySelfContact extends Payload {
	/**
	 * 
	 **/
	contact: ParamSelfContactMerge;

	constructor(json?: JsonObject) {
		super();
		this.contact = new ParamSelfContactMerge(json?.contact as JsonObject);
	}

	override getAction(): {
		kind: "Merge",
		object: "Self",
		filter: "Contact",
		batch: false,
	} {
		return {
			kind: "Merge",
			object: "Self",
			filter: "Contact",
			batch: false,
		};
	}

	override createReply(json?: JsonObject): Reply {
		return new RepSelfContact(json as JsonObject);
	}

	override toJSON(): any {
		return {
			...super.toJSON(),
			contact: this.contact?.toJSON() ?? null,
		};
	}
}