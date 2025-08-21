import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing {@link FormTemplate}.

 **/
export class PayFormTemplateMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link FormTemplate}.

	 **/
	formTemplate: ParamFormTemplateMerge;

	/**
	 * 

	 **/
		getKey(): string {
			return  this.formTemplate?.id?.ToString() ?? "";
		}}