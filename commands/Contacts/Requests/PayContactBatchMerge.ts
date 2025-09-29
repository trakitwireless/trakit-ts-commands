import { Reply } from "../../API/Responses/Reply";
import { Payload } from "../../API/Requests/Payload";
import { RepContactBatchMerge } from "../Responses/RepContactBatchMerge";
import { ParamContactMerge } from "./Parameters/ParamContactMerge";

/**
 * 
 **/
export class PayContactBatchMerge extends Payload {
	/**
	 * 
	 **/
	contacts: ParamContactMerge[];

	constructor(json?: JsonObject) {
		super(json);
		this.contacts = json?.contacts?.map((c: any) => new ParamContactMerge(c)) ?? [];
	}

	override createReply(json?: JsonObject): Reply {
		return new RepContactBatchMerge(json);
	}
}