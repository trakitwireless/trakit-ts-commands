import { Reply } from "../../API/Responses/Reply";
import { Payload } from "../../API/Requests/Payload";
import { IPaySingle } from "../../API/Requests/IPaySingle";
import { ParamContactMerge } from "./Parameters/ParamContactMerge";
import { RepContactMerge } from "../Responses/RepContactMerge";

/**
 * Creates a new or updates an existing {@link Contact}.
 **/
export class PayContactMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link Contact}.
	 **/
	contact: ParamContactMerge;


	constructor(json?: JsonObject) {
		super(json);
		this.contact = new ParamContactMerge(json?.contact);
	}
	/**
	 * 
	 **/
	getKey(): string {
		return this.contact?.id?.toString() ?? "";
	}

	override createReply(json?: JsonObject): Reply {
		return new RepContactMerge(json);
	}
}