import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * A container for the <see cref="providerScript"/> object.
 **/
export abstract class PayProviderScript extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the <see cref="ProviderScript"/>.
	 **/
	providerScript: ParamId;

	/**
		///
	 **/
		getKey(): string {
			return  this.providerScript?.id.ToString() ?? "";
		}}