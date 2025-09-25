import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { RepProviderConfigurationBatchMerge } from "../Responses/RepProviderConfigurationBatchMerge";
import { ParamProviderConfigurationMerge } from "./Parameters/ParamProviderConfigurationMerge";

/**
 * 
 **/
export class PayProviderConfigurationBatchMerge extends Payload {
	/**
	 * 
	 **/
	providerConfigurations: ParamProviderConfigurationMerge[];

	constructor(json: any) {
		super(json);
		this.providerConfigurations = json?.providerConfigurations?.map((e: any) => new ParamProviderConfigurationMerge(e)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepProviderConfigurationBatchMerge(json);
	}
}