import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing {@link ProviderConfiguration}.
 **/
	[Obsolete("Use ReqProviderConfigMerge instead")]
export class PayProviderConfigurationMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link ProviderConfiguration}.
	 **/
	providerConfiguration: ParamProviderConfigurationMerge;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.providerConfiguration?.id?.toString() ?? "";
		}}