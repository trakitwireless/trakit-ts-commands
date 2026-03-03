import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { RepProviderScriptBatchMerge } from "../Responses/RepProviderScriptBatchMerge";
import { ParamProviderScriptMerge } from "./Parameters/ParamProviderScriptMerge";

/**
 * 
 */
export class PayProviderScriptBatchMerge extends Payload {
	/**
	 * 
	 */
	providerScripts: ParamProviderScriptMerge[];

	constructor(json?: JsonObject) {
		super();
		this.providerScripts = (json?.providerScripts as JsonObject[])?.map((e: any) => new ParamProviderScriptMerge(e)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepProviderScriptBatchMerge(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			providerScripts: this.providerScripts.map(p => p.toJSON()),
		};
	}
}