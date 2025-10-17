import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamFormTemplateMerge } from "./Parameters/ParamFormTemplateMerge";
import { RepFormTemplateMerge } from "../Responses/RepFormTemplateMerge";

/**
 * Creates a new or updates an existing {@link FormTemplate}.
 */
export class PayFormTemplateMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link FormTemplate}.
	 */
	formTemplate: ParamFormTemplateMerge;

	constructor(json?: JsonObject) {
		super(json);
		this.formTemplate = new ParamFormTemplateMerge(json?.formTemplate as JsonObject);
	}
	
	/**
	 * 
	 */
	getKey(): string {
		return this.formTemplate?.id?.toString() ?? "";
	}

	override createReply(json: JsonObject): Reply {
		return new RepFormTemplateMerge(json);
	}
}