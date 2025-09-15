import { Payload } from "../../../API/Requests/Payload";

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
		this.formTemplates = (json?.formTemplates ?? []).map((item: any) => new ParamFormTemplateMerge(item));
	}
}