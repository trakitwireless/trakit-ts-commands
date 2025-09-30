import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { RepFormTemplateBatchMerge } from "../Responses/RepFormTemplateBatchMerge";
import { ParamFormTemplateMerge } from "./Parameters/ParamFormTemplateMerge";

/**
 * 
 */
export class PayFormTemplateBatchMerge extends Payload {
	/**
	 * 
	 */
	formTemplates: ParamFormTemplateMerge[];

	constructor(json?: JsonObject) {
		super(json);
		this.formTemplates = (json?.formTemplates as JsonObject[])?.map((item: any) => new ParamFormTemplateMerge(item)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepFormTemplateBatchMerge(json as JsonObject);
	}
}