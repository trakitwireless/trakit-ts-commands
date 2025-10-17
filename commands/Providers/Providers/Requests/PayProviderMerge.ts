import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamProviderMerge } from "./Parameters/ParamProviderMerge";
import { RepProviderMerge } from "../Responses/RepProviderMerge";

/**
 * Creates a new or updates an existing {@link Provider}.
 **/
export class PayProviderMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link Provider}.
	 **/
	provider: ParamProviderMerge;

	constructor(json?: JsonObject) {
		super(json);
		this.provider = new ParamProviderMerge(json?.provider as JsonObject);
	}
	/**
	 * 
	 **/
	getKey(): string {
		return this.provider?.id?.toString() ?? "";
	}

	override createReply(json: JsonObject): Reply {
		return new RepProviderMerge(json);
	}
}