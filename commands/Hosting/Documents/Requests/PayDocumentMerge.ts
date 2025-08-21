import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing {@link Document}.
 **/
export class PayDocumentMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link Document}.
	 **/
	document: ParamDocumentMerge;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.document?.id?.ToString() ?? "";
		}}