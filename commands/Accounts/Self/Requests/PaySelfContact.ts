import { RepSelfContact } from "../Responses/RepSelfContact";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { ParamSelfContactMerge } from "./Parameters/ParamSelfContactMerge";

/**
 * 
 **/
export class PaySelfContact extends Payload {
	/**
	 * 
	 **/
	contact: ParamSelfContactMerge;

	constructor(json: any) {
		super();
		this.contact = new ParamSelfContactMerge(json?.contact);
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

	override createReply(json: any): Reply {
		return new RepSelfContact(json);
	}

	override toJSON(): any {
		return {
			...super.toJSON(),
			contact: this.contact?.toJSON() ?? null,
		};
	}
}