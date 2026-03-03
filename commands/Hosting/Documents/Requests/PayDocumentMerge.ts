import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepDocumentMerge } from "../Responses/RepDocumentMerge";
import { ParamDocumentMerge } from "./Parameters/ParamDocumentMerge";

/**
 * Creates a new or updates an existing {@link Document}.
 */
export class PayDocumentMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link Document}.
	 */
	document: ParamDocumentMerge;

	constructor(json?: JsonObject) {
		super(json);
		this.document = new ParamDocumentMerge(json?.document as JsonObject);
	}

	/**
	 * 
	 */
	getKey(): string {
		return this.document?.id?.toString() ?? "";
	}

	override createReply(json: JsonObject): Reply {
		return new RepDocumentMerge(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			document: this.document.toJSON(),
		};
	}
}