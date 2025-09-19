import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "commands/API/Requests/Parameters/ParamId";

/**
 * A container for the {@link providerScript} object.
 **/
export abstract class PayProviderScript extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link ProviderScript}.
	 **/
	providerScript: ParamId;

	constructor(json: any) {
		super();
		this.providerScript = new ParamId(json?.providerScript);
	}
	/**
	 * 
	 **/
	getKey(): string {
		return this.providerScript?.id?.toString() ?? "";
	}
}