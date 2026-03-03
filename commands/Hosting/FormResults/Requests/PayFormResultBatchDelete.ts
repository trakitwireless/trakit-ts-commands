import { JsonObject } from "@trakit/objects";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
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
		this.formResults = (json?.formResults as JsonObject[])?.map((item: any) => new ParamId(item)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepFormResultBatchDelete(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			formResults: this.formResults.map(item => item.toJSON()),
		};
	}
}