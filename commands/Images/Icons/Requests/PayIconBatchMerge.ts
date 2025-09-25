import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { RepIconBatchMerge } from "../Responses/RepIconBatchMerge";
import { ParamIconMerge } from "./Parameters/ParamIconMerge";

/**
 * 
 **/
export class PayIconBatchMerge extends Payload {
	/**
	 * 
	 **/
	icons: ParamIconMerge[];

	constructor(json: any) {
		super(json);
		this.icons = json?.icons?.map((i: any) => new ParamIconMerge(i)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepIconBatchMerge(json);
	}
}