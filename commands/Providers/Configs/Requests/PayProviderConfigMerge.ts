import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing {@link ProviderConfig}.
 **/
export class PayProviderConfigMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link ProviderConfig}.
	 **/
	providerConfig: ParamProviderConfigMerge;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.providerConfig?.id?.ToString() ?? "";
		}}