import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
import { RepAssetMessageBatchDelete } from "../Responses/RepAssetMessageBatchDelete";

/**
 * 
 **/
export class PayAssetMessageBatchDelete extends Payload {
	/**
	 * 
	 **/
	assetMessages: ParamId[];

	constructor(json?: JsonObject) {
		super();
		this.assetMessages = (json?.assetMessages as JsonObject[])?.map((e: any) => new ParamId(e)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepAssetMessageBatchDelete(json as JsonObject);
	}
}