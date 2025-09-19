import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamProviderScriptMerge } from "./Parameters/ParamProviderScriptMerge";

/**
 * Creates a new or updates an existing {@link ProviderScript}.
 **/
export class PayProviderScriptMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link ProviderScript}.
	 **/
	providerScript: ParamProviderScriptMerge;

	constructor(json: any) {
		super();
		this.providerScript = new ParamProviderScriptMerge(json?.providerScript);
	}
	/**
	 * 
	 **/
	getKey(): string {
		return this.providerScript?.id?.toString() ?? "";
	}
}