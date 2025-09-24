import { Payload } from "../../API/Requests/Payload";
import { ParamAssetMessageMerge } from "./Parameters/ParamAssetMessageMerge";

/**
 * 
 **/
export class PayAssetMessageBatchMerge extends Payload {
	/**
	 * 
	 **/
	assetMessages: ParamAssetMessageMerge[];

	constructor(json: any) {
		super(json);
		this.assetMessages = json?.assetMessages?.map((e: any) => new ParamAssetMessageMerge(e)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepAssetMessageBatchMerge(json);
	}
}