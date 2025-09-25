import { Reply } from "../../../API/Responses/Reply";
import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { RepProviderScriptBatchDelete } from "../Responses/RepProviderScriptBatchDelete";

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

	override createReply(json: any): Reply {
		return new RepProviderScriptBatchDelete(json);
	}
}