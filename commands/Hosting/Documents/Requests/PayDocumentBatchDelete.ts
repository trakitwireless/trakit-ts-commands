import { Reply } from "../../../API/Responses/Reply";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { RepDocumentBatchDelete } from "../Responses/RepDocumentBatchDelete";

/**
 * 
 **/
export class PayDocumentBatchDelete extends Payload {
	/**
	 * 
	 **/
	documents: ParamId[];

	constructor(json: any) {
		super(json);
		this.documents = json?.documents?.map((d: any) => new ParamId(d)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepDocumentBatchDelete(json);
	}
}