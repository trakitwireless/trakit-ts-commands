import { Payload } from "../../../API/Requests/Payload";
import { ParamProviderScriptMerge } from "./Parameters/ParamProviderScriptMerge";

/**
 * 
 **/
export class PayProviderScriptBatchMerge extends Payload {
	/**
	 * 
	 **/
	providerScripts: ParamProviderScriptMerge[];

	constructor(json: any) {
		super();
		this.providerScripts = json?.providerScripts?.map((e: any) => new ParamProviderScriptMerge(e)) ?? [];
	}
}