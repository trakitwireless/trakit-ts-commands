import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";

/**
 * 
 */
export class PayFormResultBatchDelete extends Payload {
	/**
	 * 
	 */
	formResults: ParamId[];

	constructor(json?: any) {
		super(json);
		this.formResults = (json?.formResults ?? []).map((item: any) => new ParamId(item));
	}
}