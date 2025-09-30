import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { RepProviderRegistrationBatchMerge } from "../Responses/RepProviderRegistrationBatchMerge";
import { ParamProviderRegistrationMerge } from "./Parameters/ParamProviderRegistrationMerge";

/**
 * 
 **/
export class PayProviderRegistrationBatchMerge extends Payload {
	/**
	 * 
	 **/
	providerRegistrations: ParamProviderRegistrationMerge[];

	constructor(json?: JsonObject) {
		super(json);
		this.providerRegistrations = (json?.providerRegistrations as JsonObject[])?.map((e: any) => new ParamProviderRegistrationMerge(e)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepProviderRegistrationBatchMerge(json as JsonObject);
	}
}