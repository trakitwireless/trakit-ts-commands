import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
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
		this.users = json?.users?.map((u: any) => new ParamUserMerge(u)) ?? [];
	}

	override createReply(json?: JsonObject): Reply {
		return new RepUserBatchMerge(json);
	}
}