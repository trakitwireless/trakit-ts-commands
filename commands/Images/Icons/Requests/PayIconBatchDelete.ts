import { JsonObject } from "@trakit/objects";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepIconBatchDelete } from "../Responses/RepIconBatchDelete";

/**
 * 
 */
export class PayIconBatchDelete extends Payload {
	/**
	 * 
	 */
	icons: ParamId[];

	constructor(json?: JsonObject) {
		super(json);
		this.icons = (json?.icons as JsonObject[])?.map((i: any) => new ParamId(i)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepIconBatchDelete(json);
	}
}