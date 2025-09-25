import { Reply } from "../../../API/Responses/Reply";
import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { RepProviderConfigBatchDelete } from "../Responses/RepProviderConfigBatchDelete";

/**
 * 
 **/
export class PayProviderConfigBatchDelete extends Payload {
	/**
	 * 
	 **/
	providerConfigs: ParamId[];

	constructor(json: any) {
		super(json);
		this.providerConfigs = json?.providerConfigs?.map((e: any) => new ParamId(e)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepProviderConfigBatchDelete(json);
	}
}