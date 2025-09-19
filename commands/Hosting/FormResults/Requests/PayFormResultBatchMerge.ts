import { Payload } from "../../../API/Requests/Payload";
import { ParamFormResultMerge } from "./Parameters/ParamFormResultMerge";

/**
 * 
 */
export class PayFormResultBatchMerge extends Payload {
	/**
	 * 
	 */
	formResults: ParamFormResultMerge[];

	constructor(json?: any) {
		super(json);
		this.formResults = json?.formResults?.map((item: any) => new ParamFormResultMerge(item)) ?? [];
	}
}