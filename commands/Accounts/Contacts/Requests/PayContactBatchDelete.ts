import { JsonObject } from "@trakit/objects";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepContactBatchDelete } from "../Responses/RepContactBatchDelete";

/**
 * 
 */
export class PayContactBatchDelete extends Payload {
	/**
	 * 
	 */
	contacts: ParamId[];

	constructor(json?: JsonObject) {
		super(json);
		this.contacts = (json?.contacts as JsonObject[])?.map((c: any) => new ParamId(c)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepContactBatchDelete(json);
	}
}