import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { RepDocumentBatchMerge } from "../Responses/RepDocumentBatchMerge";
import { ParamDocumentMerge } from "./Parameters/ParamDocumentMerge";

/**
 * 
 **/
export class PayDocumentBatchMerge extends Payload {
	/**
	 * 
	 **/
	documents: ParamDocumentMerge[];

	constructor(json: any) {
		super(json);
		this.documents = json?.documents?.map((d: any) => new ParamDocumentMerge(d)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepDocumentBatchMerge(json);
	}
}