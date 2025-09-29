import { Reply } from "../../../API/Responses/Reply";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { RepFormResultBatchDelete } from "../Responses/RepFormResultBatchDelete";

/**
 * 
 */
export class PayFormResultBatchDelete extends Payload {
	/**
	 * 
	 */
	formResults: ParamId[];

	constructor(json?: JsonObject) {
		super(json);
		this.formResults = json?.formResults?.map((item: any) => new ParamId(item)) ?? [];
	}

	override createReply(json?: JsonObject): Reply {
		return new RepFormResultBatchDelete(json);
	}
}