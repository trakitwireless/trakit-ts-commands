import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamProviderConfigurationMerge } from "./Parameters/ParamProviderConfigurationMerge";
import { RepProviderConfigurationMerge } from "../Responses/RepProviderConfigurationMerge";

/**
 * Creates a new or updates an existing {@link ProviderConfiguration}.
 **/
export class PayProviderConfigurationMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link ProviderConfiguration}.
	 **/
	providerConfiguration: ParamProviderConfigurationMerge;

	constructor(json?: JsonObject) {
		super(json);
		this.providerConfiguration = new ParamProviderConfigurationMerge(json?.providerConfiguration as JsonObject);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.providerConfiguration?.id?.toString() ?? "";
	}

	override createReply(json: JsonObject): Reply {
		return new RepProviderConfigurationMerge(json);
	}
}