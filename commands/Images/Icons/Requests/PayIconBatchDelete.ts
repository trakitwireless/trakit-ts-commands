import { Reply } from "../../../API/Responses/Reply";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { RepIconBatchDelete } from "../Responses/RepIconBatchDelete";

/**
 * 
 **/
export class PayIconBatchDelete extends Payload {
	/**
	 * 
	 **/
	icons: ParamId[];

	constructor(json?: JsonObject) {
		super(json);
		this.icons = json?.icons?.map((i: any) => new ParamId(i)) ?? [];
	}

	override createReply(json?: JsonObject): Reply {
		return new RepIconBatchDelete(json);
	}
}