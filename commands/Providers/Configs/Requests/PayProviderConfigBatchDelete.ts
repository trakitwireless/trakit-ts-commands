import { JsonObject } from "@trakit/objects";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepProviderConfigBatchDelete } from "../Responses/RepProviderConfigBatchDelete";

/**
 * 
 **/
export class PayProviderConfigBatchDelete extends Payload {
	/**
	 * 
	 **/
	providerConfigs: ParamId[];

	constructor(json?: JsonObject) {
		super(json);
		this.providerConfigs = (json?.providerConfigs as JsonObject[])?.map((e: any) => new ParamId(e)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepProviderConfigBatchDelete(json);
	}
}