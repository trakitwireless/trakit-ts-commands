import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";

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