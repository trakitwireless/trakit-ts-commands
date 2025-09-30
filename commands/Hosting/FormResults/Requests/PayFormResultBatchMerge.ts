import { JsonObject } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
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

	constructor(json?: JsonObject) {
		super(json);
		this.formResults = (json?.formResults as JsonObject[])?.map((item: any) => new ParamFormResultMerge(item)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepFormResultBatchMerge(json as JsonObject);
	}
}