import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { RepFormResultBatchMerge } from "../Responses/RepFormResultBatchMerge";
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

	override createReply(json: any): Reply {
		return new RepFormResultBatchMerge(json);
	}
}