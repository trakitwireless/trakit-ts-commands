import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { RepProviderBatchMerge } from "../Responses/RepProviderBatchMerge";
import { ParamProviderMerge } from "./Parameters/ParamProviderMerge";

/**
 * 
 */
export class PayProviderBatchMerge extends Payload {
	/**
	 * 
	 */
	providers: ParamProviderMerge[];

	constructor(json?: JsonObject) {
		super(json);
		this.providers = (json?.providers as JsonObject[])?.map((item: any) => new ParamProviderMerge(item)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepProviderBatchMerge(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			providers: this.providers.map(p => p.toJSON()),
		};
	}
}