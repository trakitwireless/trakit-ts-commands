import { JsonObject } from "@trakit/objects";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
import { RepAssetBatchMerge } from "../Responses/RepAssetBatchMerge";
import { ParamAssetMerge } from "./Parameters/ParamAssetMerge";

/**
 * 
 */
export class PayAssetBatchMerge extends Payload {
	/**
	 * 
	 */
	assets: ParamAssetMerge[];

	constructor(json?: JsonObject) {
		super(json);
		this.assets = (json?.assets as JsonObject[])?.map((a: any) => new ParamAssetMerge(a)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepAssetBatchMerge(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			assets: this.assets.map(a => a.toJSON()),
		};
	}
}