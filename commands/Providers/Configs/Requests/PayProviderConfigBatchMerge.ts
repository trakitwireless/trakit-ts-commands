import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { RepProviderConfigBatchMerge } from "../Responses/RepProviderConfigBatchMerge";
import { ParamProviderConfigMerge } from "./Parameters/ParamProviderConfigMerge";

/**
 * 
 **/
export class PayProviderConfigBatchMerge extends Payload {
	/**
	 * 
	 **/
	providerConfigs: ParamProviderConfigMerge[];

	constructor(json?: JsonObject) {
		super(json);
		this.providerConfigs = (json?.providerConfigs as JsonObject[])?.map((e: any) => new ParamProviderConfigMerge(e)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepProviderConfigBatchMerge(json as JsonObject);
	}
}