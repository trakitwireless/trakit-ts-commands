import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamFormResultMerge } from "./Parameters/ParamFormResultMerge";
import { RepFormResultMerge } from "../Responses/RepFormResultMerge";

/**
 * Creates a new or updates an existing {@link FormResult}.
 */
export class PayFormResultMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link FormResult}.
	 */
	formResult: ParamFormResultMerge;

	constructor(json?: JsonObject) {
		super(json);
		this.formResult = new ParamFormResultMerge(json?.formResult as JsonObject);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.formResult?.id?.toString() ?? "";
	}

	override createReply(json: JsonObject): Reply {
		return new RepFormResultMerge(json as JsonObject);
	}
}