import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamProviderConfigurationMerge } from "./Parameters/ParamProviderConfigurationMerge";

/**
 * Creates a new or updates an existing {@link ProviderConfiguration}.
 **/
export class PayProviderConfigurationMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link ProviderConfiguration}.
	 **/
	providerConfiguration: ParamProviderConfigurationMerge;

	constructor(json: any) {
		super(json);
		this.providerConfiguration = new ParamProviderConfigurationMerge(json?.providerConfiguration);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.providerConfiguration?.id?.toString() ?? "";
	}

	override createReply(json: any): Reply {
		return new RepProviderConfigurationMerge(json);
	}
}