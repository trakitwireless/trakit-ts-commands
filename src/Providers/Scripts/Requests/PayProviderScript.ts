import { JsonObject } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";

/**
 * A container for the {@link providerScript} object.
 */
export abstract class PayProviderScript extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link ProviderScript}.
	 */
	providerScript: ParamId;

	constructor(json?: JsonObject) {
		super();
		this.providerScript = new ParamId(json?.providerScript as JsonObject);
	}
	/**
	 * 
	 */
	getKey(): string {
		return this.providerScript?.id?.toString() ?? "";
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			providerScript: this.providerScript.toJSON(),
		};
	}
}