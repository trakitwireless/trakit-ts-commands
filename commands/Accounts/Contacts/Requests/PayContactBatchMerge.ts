import { JsonObject } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
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
		this.contacts = (json?.contacts as JsonObject[])?.map((c: any) => new ParamContactMerge(c)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepContactBatchMerge(json as JsonObject);
	}
}