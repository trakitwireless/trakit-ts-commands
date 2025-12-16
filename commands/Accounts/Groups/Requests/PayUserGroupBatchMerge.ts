import { JsonObject } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepUserGroupBatchMerge } from "../Responses/RepUserGroupBatchMerge";
import { ParamUserGroupMerge } from "./Parameters/ParamUserGroupMerge";

/**
 * 
 */
export class PayUserGroupBatchMerge extends Payload {
	/**
	 * 
	 */
	userGroups: ParamUserGroupMerge[];

	constructor(json?: JsonObject) {
		super(json);
		this.userGroups = (json?.userGroups as JsonObject[]).map((ug: any) => new ParamUserGroupMerge(ug)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepUserGroupBatchMerge(json);
	}
}