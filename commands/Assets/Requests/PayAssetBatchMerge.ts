import { Payload } from "../../API/Requests/Payload";
import { ParamAssetMerge } from "./Parameters/ParamAssetMerge";

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
}