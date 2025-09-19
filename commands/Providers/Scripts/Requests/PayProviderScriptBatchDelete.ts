import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";

/**
 * 
 **/
export class PayProviderScriptBatchDelete extends Payload {
	/**
	 * 
	 **/
	providerScripts: ParamId[];

	constructor(json: any) {
		super();
		this.providerScripts = json?.providerScripts?.map((e: any) => new ParamId(e)) ?? [];
	}
}