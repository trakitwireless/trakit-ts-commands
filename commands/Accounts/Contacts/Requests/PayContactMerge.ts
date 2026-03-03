import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepContactMerge } from "../Responses/RepContactMerge";
import { ParamContactMerge } from "./Parameters/ParamContactMerge";

/**
 * Creates a new or updates an existing {@link Contact}.
 */
export class PayContactMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link Contact}.
	 */
	contact: ParamContactMerge;


	constructor(json?: JsonObject) {
		super(json);
		this.contact = new ParamContactMerge(json?.contact as JsonObject);
	}
	/**
	 * 
	 */
	getKey(): string {
		return this.contact?.id?.toString() ?? "";
	}

	override createReply(json: JsonObject): Reply {
		return new RepContactMerge(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			contact: this.contact.toJSON(),
		};
	}
}