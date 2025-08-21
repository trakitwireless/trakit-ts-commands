import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing {@link ProviderRegistration}.
 **/
export class PayProviderRegistrationMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link ProviderRegistration}.
	 **/
	providerRegistration: ParamProviderRegistrationMerge;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.providerRegistration?.code ?? "";
		}}