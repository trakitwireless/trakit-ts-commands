import { JsonObject } from "@trakit/objects";
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

	constructor(json?: JsonObject) {
		super(json);
		this.icons = (json?.icons as JsonObject[])?.map((i: any) => new ParamIconMerge(i)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepIconBatchMerge(json as JsonObject);
	}
}