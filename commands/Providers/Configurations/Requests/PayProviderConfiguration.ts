import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";

/**
 * A container for the {@link providerConfiguration} object.
 **/
export abstract class PayProviderConfiguration extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link ProviderConfiguration}.
	 **/
	providerConfiguration: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.providerConfiguration = new ParamId(json?.providerConfiguration);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.providerConfiguration?.id?.toString() ?? "";
	}
}