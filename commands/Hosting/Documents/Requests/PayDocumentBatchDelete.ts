import { JsonObject } from "@trakit/objects";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepDocumentBatchDelete } from "../Responses/RepDocumentBatchDelete";

/**
 * 
 */
export class PayDocumentBatchDelete extends Payload {
	/**
	 * 
	 */
	documents: ParamId[];

	constructor(json?: JsonObject) {
		super(json);
		this.documents = (json?.documents as JsonObject[])?.map((d: any) => new ParamId(d)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepDocumentBatchDelete(json);
	}
}