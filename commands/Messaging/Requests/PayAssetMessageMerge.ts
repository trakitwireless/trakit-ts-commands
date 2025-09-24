import { Payload } from "../../API/Requests/Payload";
import { IPaySingle } from "../../API/Requests/IPaySingle";
import { ParamAssetMessageMerge } from "./Parameters/ParamAssetMessageMerge";

/**
 * Creates a new or updates an existing {@link AssetMessage}.
 **/
export class PayAssetMessageMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link AssetMessage}.
	 **/
	assetMessage: ParamAssetMessageMerge;

	constructor(json: any) {
		super(json);
		this.assetMessage = new ParamAssetMessageMerge(json?.assetMessage);
	}
	/**
	 * 
	 **/
	getKey(): string {
		return this.assetMessage?.id?.toString() ?? "";
	}

	override createReply(json: any): Reply {
		return new RepAssetMessageMerge(json);
	}
}