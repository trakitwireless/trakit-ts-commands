import { Payload } from "../../../API/Requests/Payload";
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
}