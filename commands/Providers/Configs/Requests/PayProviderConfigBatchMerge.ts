import { Payload } from "../../../API/Requests/Payload";
import { ParamProviderConfigMerge } from "./Parameters/ParamProviderConfigMerge";

/**
 * 
 **/
export class PayProviderConfigBatchMerge extends Payload {
	/**
	 * 
	 **/
	providerConfigs: ParamProviderConfigMerge[];

	constructor(json: any) {
		super(json);
		this.providerConfigs = json?.providerConfigs?.map((e: any) => new ParamProviderConfigMerge(e)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepProviderConfigBatchMerge(json);
	}
}