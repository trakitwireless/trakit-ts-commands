import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";

/**
 * A container for the {@link providerConfigurationType} object.
 **/
export abstract class PayProviderConfigurationType extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link ProviderConfigurationType}.
	 **/
	providerConfigurationType: ParamId;

	constructor(json: any) {
		super(json);
		this.providerConfigurationType = new ParamId(json?.providerConfigurationType);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.providerConfigurationType?.id?.toString() ?? "";
	}
}