import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamFormTemplateMerge } from "./Parameters/ParamFormTemplateMerge";

/**
 * Creates a new or updates an existing {@link FormTemplate}.
 */
export class PayFormTemplateMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link FormTemplate}.
	 */
	formTemplate: ParamFormTemplateMerge;

	constructor(json?: any) {
		super(json);
		this.formTemplate = new ParamFormTemplateMerge(json?.formTemplate);
	}
	
	/**
	 * 
	 */
	getKey(): string {
		return this.formTemplate?.id?.toString() ?? "";
	}

	override createReply(json: any): Reply {
		return new RepFormTemplateMerge(json);
	}
}