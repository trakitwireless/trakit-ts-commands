import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";

/**
 * A container for the {@link providerConfig} object.
 */
export abstract class PayProviderConfig extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link ProviderConfig}.
	 */
	providerConfig: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.providerConfig = new ParamId(json?.providerConfig as JsonObject);
	}
	/**
	 * 
	 */
	getKey(): string {
		return this.providerConfig?.id?.toString() ?? "";
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			providerConfig: this.providerConfig.toJSON(),
		};
	}
}