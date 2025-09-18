import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamProviderConfigMerge } from "./Parameters/ParamProviderConfigMerge";

/**
 * Creates a new or updates an existing {@link ProviderConfig}.
 **/
export class PayProviderConfigMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link ProviderConfig}.
	 **/
	providerConfig: ParamProviderConfigMerge;

	constructor(json: any) {
		super(json);
		this.providerConfig = new ParamProviderConfigMerge(json?.providerConfig);
	}
	/**
	 * 
	 **/
	getKey(): string {
		return this.providerConfig?.id?.toString() ?? "";
	}
}