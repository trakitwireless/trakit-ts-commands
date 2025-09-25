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

	constructor(json?: any) {
		super(json);
		this.formTemplates = json?.formTemplates?.map((item: any) => new ParamId(item)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepFormTemplateBatchDelete(json);
	}
}