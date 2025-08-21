import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * A container for the <see cref="providerConfiguration"/> object.
 **/
	[Obsolete("Use ReqProviderConfig instead")]
export abstract class PayProviderConfiguration extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the <see cref="ProviderConfiguration"/>.
	 **/
	providerConfiguration: ParamId;

	/**
		///
	 **/
		getKey(): string {
			return  this.providerConfiguration?.id.ToString() ?? "";
		}}