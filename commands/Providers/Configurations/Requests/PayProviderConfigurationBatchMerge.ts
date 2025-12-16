import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { RepProviderConfigurationBatchMerge } from "../Responses/RepProviderConfigurationBatchMerge";
import { ParamProviderConfigurationMerge } from "./Parameters/ParamProviderConfigurationMerge";

/**
 * 
 */
export class PayProviderConfigurationBatchMerge extends Payload {
	/**
	 * 
	 */
	providerConfigurations: ParamProviderConfigurationMerge[];

	constructor(json?: JsonObject) {
		super(json);
		this.providerConfigurations = (json?.providerConfigurations as JsonObject[])?.map((e: any) => new ParamProviderConfigurationMerge(e)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepProviderConfigurationBatchMerge(json);
	}
}