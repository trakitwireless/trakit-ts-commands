import { Reply } from "../../API/Responses/Reply";
import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";
import { RepAssetMessageBatchDelete } from "../Responses/RepAssetMessageBatchDelete";

/**
 * 
 **/
export class PayAssetMessageBatchDelete extends Payload {
	/**
	 * 
	 **/
	assetMessages: ParamId[];

	constructor(json: any) {
		super();
		this.assetMessages = json?.assetMessages?.map((e: any) => new ParamId(e)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepAssetMessageBatchDelete(json);
	}
}