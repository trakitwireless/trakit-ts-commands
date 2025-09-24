import { Reply } from "../../API/Responses/Reply";
import { Payload } from "../../API/Requests/Payload";
import { ParamAssetMerge } from "./Parameters/ParamAssetMerge";
import { RepAssetBatchMerge } from "../Responses/RepAssetBatchMerge";

/**
 * 
 **/
export class PayAssetBatchMerge extends Payload {
	/**
	 * 
	 **/
	assets: ParamAssetMerge[];

	constructor(json?: any) {
		super(json);
		this.assets = json?.assets?.map((a: any) => new ParamAssetMerge(a)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepAssetBatchMerge(json);
	}
}