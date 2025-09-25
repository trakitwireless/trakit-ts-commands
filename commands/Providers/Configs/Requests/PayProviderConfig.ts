import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";

/**
 * A container for the {@link providerConfig} object.
 **/
export abstract class PayProviderConfig extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link ProviderConfig}.
	 **/
	providerConfig: ParamId;

	constructor(json: any) {
		super(json);
		this.providerConfig = new ParamId(json?.providerConfig);
	}
	/**
	 * 
	 **/
	getKey(): string {
		return this.providerConfig?.id?.toString() ?? "";
	}
}