import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing <see cref="ProviderRegistration"/>.
 **/
export class PayProviderRegistrationMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a <see cref="ProviderRegistration"/>.
	 **/
	providerRegistration: ParamProviderRegistrationMerge;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.providerRegistration?.code ?? "";
		}}