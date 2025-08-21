import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * A container for the {@link providerConfigurationType} object.
 **/
	[Obsolete("Use ReqProviderScript instead")]
export abstract class PayProviderConfigurationType extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link ProviderConfigurationType}.
	 **/
	providerConfigurationType: ParamId;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.providerConfigurationType?.id.ToString() ?? "";
		}}