import { JsonObject } from "@trakit/objects";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepFormTemplateBatchDelete } from "../Responses/RepFormTemplateBatchDelete";

/**
 * 
 */
export class PayFormTemplateBatchDelete extends Payload {
	/**
	 * 
	 */
	formTemplates: ParamId[];

	constructor(json?: JsonObject) {
		super(json);
		this.formTemplates = (json?.formTemplates as JsonObject[])?.map((item: any) => new ParamId(item)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepFormTemplateBatchDelete(json as JsonObject);
	}
}