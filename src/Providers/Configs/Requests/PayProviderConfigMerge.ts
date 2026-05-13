import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamProviderConfigMerge } from "./Parameters/ParamProviderConfigMerge";
import { RepProviderConfigMerge } from "../Responses/RepProviderConfigMerge";

/**
 * Creates a new or updates an existing {@link ProviderConfig}.
 */
export class PayProviderConfigMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link ProviderConfig}.
	 */
	providerConfig: ParamProviderConfigMerge;

	constructor(json?: JsonObject) {
		super(json);
		this.providerConfig = new ParamProviderConfigMerge(json?.providerConfig as JsonObject);
	}
	/**
	 * 
	 */
	getKey(): string {
		return this.providerConfig?.id?.toString() ?? "";
	}

	override createReply(json: JsonObject): Reply {
		return new RepProviderConfigMerge(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			providerConfig: this.providerConfig.toJSON(),
		};
	}
}