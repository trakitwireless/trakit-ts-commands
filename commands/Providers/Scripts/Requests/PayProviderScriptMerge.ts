import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamProviderScriptMerge } from "./Parameters/ParamProviderScriptMerge";
import { RepProviderScriptMerge } from "../Responses/RepProviderScriptMerge";

/**
 * Creates a new or updates an existing {@link ProviderScript}.
 */
export class PayProviderScriptMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link ProviderScript}.
	 */
	providerScript: ParamProviderScriptMerge;

	constructor(json?: JsonObject) {
		super();
		this.providerScript = new ParamProviderScriptMerge(json?.providerScript as JsonObject);
	}
	/**
	 * 
	 */
	getKey(): string {
		return this.providerScript?.id?.toString() ?? "";
	}

	override createReply(json: JsonObject): Reply {
		return new RepProviderScriptMerge(json);
	}
}