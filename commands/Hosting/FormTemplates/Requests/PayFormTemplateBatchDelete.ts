import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";

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
}