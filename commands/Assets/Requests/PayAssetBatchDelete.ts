import { Reply } from "../../API/Responses/Reply";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";
import { RepAssetBatchDelete } from "../Responses/RepAssetBatchDelete";

/**
 * 
 **/
export class PayAssetBatchDelete extends Payload {
	/**
	 * 
	 **/
	assets: ParamId[];
	
	constructor(json?: any) {
		super(json);
		this.assets = json?.assets?.map((id: any) => new ParamId(id)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepAssetBatchDelete(json);
	}
}