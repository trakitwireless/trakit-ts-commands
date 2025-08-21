import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * A container for the {@link providerRegistration} object.
 **/
export abstract class PayProviderRegistration extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link ProviderRegistration}.
	 **/
	providerRegistration: ParamCode;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.providerRegistration?.code.ToString() ?? "";
		}}