import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamIdentifier } from "../../../API/Requests/Parameters/ParamIdentifier";

/**
 * A container for the {@link provider} object.
 **/
export abstract class PayProvider extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link Provider}.
	 **/
	provider: ParamIdentifier;

	constructor(json?: JsonObject) {
		super(json);
		this.provider = new ParamIdentifier(json?.provider);
	}
	/**
	 * 
	 **/
	getKey(): string {
		return this.provider?.id ?? "";
	}
}