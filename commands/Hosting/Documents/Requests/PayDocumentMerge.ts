import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamDocumentMerge } from "./Parameters/ParamDocumentMerge";

/**
 * Creates a new or updates an existing {@link Document}.
 **/
export class PayDocumentMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link Document}.
	 **/
	document: ParamDocumentMerge;

	constructor(json: any) {
		super(json);
		this.document = new ParamDocumentMerge(json?.document);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.document?.id?.toString() ?? "";
	}
}