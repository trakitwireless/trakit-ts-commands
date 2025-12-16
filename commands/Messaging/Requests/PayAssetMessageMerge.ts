import { JsonObject } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { Payload } from "../../API/Requests/Payload";
import { IPaySingle } from "../../API/Requests/IPaySingle";
import { ParamAssetMessageMerge } from "./Parameters/ParamAssetMessageMerge";
import { RepAssetMessageMerge } from "../Responses/RepAssetMessageMerge";

/**
 * Creates a new or updates an existing {@link AssetMessage}.
 */
export class PayAssetMessageMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link AssetMessage}.
	 */
	assetMessage: ParamAssetMessageMerge;

	constructor(json?: JsonObject) {
		super(json);
		this.assetMessage = new ParamAssetMessageMerge(json?.assetMessage as JsonObject);
	}
	/**
	 * 
	 */
	getKey(): string {
		return this.assetMessage?.id?.toString() ?? "";
	}

	override createReply(json: JsonObject): Reply {
		return new RepAssetMessageMerge(json);
	}
}