import { JsonObject } from "@trakit/objects";
import { ParamKey } from "../../../API/Requests/Parameters/ParamKey";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepMachineBatchDelete } from "../Responses/RepMachineBatchDelete";

/**
 * 
 **/
export class PayMachineBatchDelete extends Payload {
	/**
	 * 
	 **/
	machines: ParamKey[];

	constructor(json?: JsonObject) {
		super(json);
		this.machines = (json?.machines as JsonObject[])?.map((m: any) => new ParamKey(m)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepMachineBatchDelete(json as JsonObject);
	}
}