import { JsonObject } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepUserBatchMerge } from "../Responses/RepUserBatchMerge";
import { ParamUserMerge } from "./Parameters/ParamUserMerge";

/**
 * 
 **/
export class PayUserBatchMerge extends Payload {
	/**
	 * 
	 **/
	users: ParamUserMerge[];

	constructor(json?: JsonObject) {
		super(json);
		this.users = (json?.users as JsonObject[])?.map((u: any) => new ParamUserMerge(u)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepUserBatchMerge(json);
	}
}