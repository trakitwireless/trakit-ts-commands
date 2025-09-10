import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing {@link FormResult}.

 **/
export class PayFormResultMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link FormResult}.

	 **/
	formResult: ParamFormResultMerge;

	/**
	 * 

	 **/
		getKey(): string {
			return  this.formResult?.id?.toString() ?? "";
		}}