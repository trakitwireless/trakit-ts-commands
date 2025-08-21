import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * A container for the <see cref="providerConfig"/> object.
 **/
export abstract class PayProviderConfig extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the <see cref="ProviderConfig"/>.
	 **/
	providerConfig: ParamId;

	/**
		///
	 **/
		getKey(): string {
			return  this.providerConfig?.id.ToString() ?? "";
		}}