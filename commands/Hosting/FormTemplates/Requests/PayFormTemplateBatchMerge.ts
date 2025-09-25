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

	constructor(json?: any) {
		super(json);
		this.formTemplates = json?.formTemplates?.map((item: any) => new ParamFormTemplateMerge(item)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepFormTemplateBatchMerge(json);
	}
}