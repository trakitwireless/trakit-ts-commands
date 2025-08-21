import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing <see cref="ProviderConfiguration"/>.
 **/
	[Obsolete("Use ReqProviderConfigMerge instead")]
export class PayProviderConfigurationMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a <see cref="ProviderConfiguration"/>.
	 **/
	providerConfiguration: ParamProviderConfigurationMerge;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.providerConfiguration?.id?.ToString() ?? "";
		}}