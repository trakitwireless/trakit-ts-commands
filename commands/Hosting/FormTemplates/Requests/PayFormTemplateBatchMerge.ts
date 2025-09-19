import { Payload } from "../../../API/Requests/Payload";
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
}