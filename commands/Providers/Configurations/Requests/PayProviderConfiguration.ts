import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * A container for the {@link providerConfiguration} object.
 **/
	[Obsolete("Use ReqProviderConfig instead")]
export abstract class PayProviderConfiguration extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link ProviderConfiguration}.
	 **/
	providerConfiguration: ParamId;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.providerConfiguration?.id.ToString() ?? "";
		}}