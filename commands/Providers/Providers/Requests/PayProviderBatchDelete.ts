import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ParamIdentifier } from "../../../API/Requests/Parameters/ParamIdentifier";
import { Payload } from "../../../API/Requests/Payload";
import { RepProviderBatchDelete } from "../Responses/RepProviderBatchDelete";

/**
 * 
 **/
export class PayProviderBatchDelete extends Payload {
	/**
	 * 
	 **/
	providers: ParamIdentifier[];

	constructor(json?: JsonObject) {
		super(json);
		this.providers = (json?.providers as JsonObject[])?.map((item: any) => new ParamIdentifier(item)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepProviderBatchDelete(json);
	}
}