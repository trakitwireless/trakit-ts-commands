import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ParamCode } from "../../../API/Requests/Parameters/ParamCode";
import { Payload } from "../../../API/Requests/Payload";
import { RepProviderRegistrationBatchDelete } from "../Responses/RepProviderRegistrationBatchDelete";

/**
 * 
 */
export class PayProviderRegistrationBatchDelete extends Payload {
	/**
	 * 
	 */
	providerRegistrations: ParamCode[];

	constructor(json?: JsonObject) {
		super(json);
		this.providerRegistrations = (json?.providerRegistrations as JsonObject[])?.map((e: any) => new ParamCode(e)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepProviderRegistrationBatchDelete(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			providerRegistrations: this.providerRegistrations.map(p => p.toJSON()),
		};
	}
}