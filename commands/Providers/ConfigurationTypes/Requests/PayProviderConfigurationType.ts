import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";

/**
 * A container for the {@link providerConfigurationType} object.
 **/
export abstract class PayProviderConfigurationType extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link ProviderConfigurationType}.
	 **/
	providerConfigurationType: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.providerConfigurationType = new ParamId(json?.providerConfigurationType as JsonObject);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.providerConfigurationType?.id?.toString() ?? "";
	}
}