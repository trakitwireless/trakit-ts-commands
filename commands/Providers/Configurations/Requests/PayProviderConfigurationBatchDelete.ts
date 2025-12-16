import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { RepProviderConfigurationBatchDelete } from "../Responses/RepProviderConfigurationBatchDelete";

/**
 * 
 */
export class PayProviderConfigurationBatchDelete extends Payload {
	/**
	 * 
	 */
	providerConfigurations: ParamId[];

	constructor(json?: JsonObject) {
		super(json);
		this.providerConfigurations = (json?.providerConfigurations as JsonObject[])?.map((e: any) => new ParamId(e)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepProviderConfigurationBatchDelete(json);
	}
}