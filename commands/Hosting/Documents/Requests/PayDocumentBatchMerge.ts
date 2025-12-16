import { JsonObject } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepDocumentBatchMerge } from "../Responses/RepDocumentBatchMerge";
import { ParamDocumentMerge } from "./Parameters/ParamDocumentMerge";

/**
 * 
 */
export class PayDocumentBatchMerge extends Payload {
	/**
	 * 
	 */
	documents: ParamDocumentMerge[];

	constructor(json?: JsonObject) {
		super(json);
		this.documents = (json?.documents as JsonObject[])?.map((d: any) => new ParamDocumentMerge(d)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepDocumentBatchMerge(json);
	}
}