import { JsonObject } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { Payload } from "../../API/Requests/Payload";
import { RepAssetMessageBatchMerge } from "../Responses/RepAssetMessageBatchMerge";
import { ParamAssetMessageMerge } from "./Parameters/ParamAssetMessageMerge";

/**
 * 
 **/
export class PayAssetMessageBatchMerge extends Payload {
	/**
	 * 
	 **/
	assetMessages: ParamAssetMessageMerge[];

	constructor(json?: JsonObject) {
		super(json);
		this.assetMessages = (json?.assetMessages as JsonObject[])?.map((e: any) => new ParamAssetMessageMerge(e)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepAssetMessageBatchMerge(json);
	}
}