import { JsonObject } from "@trakit/objects";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
import { RepAssetBatchDelete } from "../Responses/RepAssetBatchDelete";

/**
 * import { codified } from "@trakit/objects";

 **/
export class PayAssetBatchDelete extends Payload {
	/**
	 * 
	 **/
	assets: ParamId[];
	
	constructor(json?: JsonObject) {
		super(json);
		this.assets = (json?.assets as JsonObject[])?.map((id: any) => new ParamId(id)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepAssetBatchDelete(json);
	}
}