import { JsonObject } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepMachineBatchMerge } from "../Responses/RepMachineBatchMerge";
import { ParamMachineMerge } from "./Parameters/ParamMachineMerge";

/**
 * 
 **/
export class PayMachineBatchMerge extends Payload {
	/**
	 * 
	 **/
	machines: ParamMachineMerge[];

	constructor(json?: JsonObject) {
		super(json);
		this.machines = (json?.machines as JsonObject[])?.map((m: any) => new ParamMachineMerge(m)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepMachineBatchMerge(json as JsonObject);
	}
}