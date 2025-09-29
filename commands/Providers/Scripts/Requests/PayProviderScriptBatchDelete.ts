import { Reply } from "../../../API/Responses/Reply";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
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

	constructor(json?: JsonObject) {
		super();
		this.providerScripts = json?.providerScripts?.map((e: any) => new ParamId(e)) ?? [];
	}

	override createReply(json?: JsonObject): Reply {
		return new RepProviderScriptBatchDelete(json);
	}
}