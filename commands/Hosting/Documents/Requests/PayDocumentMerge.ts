import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing <see cref="Document"/>.
 **/
export class PayDocumentMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a <see cref="Document"/>.
	 **/
	document: ParamDocumentMerge;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.document?.id?.ToString() ?? "";
		}}