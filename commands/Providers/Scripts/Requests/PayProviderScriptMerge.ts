import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing {@link ProviderScript}.
 **/
export class PayProviderScriptMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link ProviderScript}.
	 **/
	providerScript: ParamProviderScriptMerge;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.providerScript?.id?.toString() ?? "";
		}}