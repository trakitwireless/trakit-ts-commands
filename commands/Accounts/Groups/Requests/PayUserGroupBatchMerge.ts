import { Reply } from "../../../API/Responses/Reply";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { RepUserGroupBatchMerge } from "../Responses/RepUserGroupBatchMerge";
import { ParamUserGroupMerge } from "./Parameters/ParamUserGroupMerge";

/**
 * 
 **/
export class PayUserGroupBatchMerge extends Payload {
	/**
	 * 
	 **/
	userGroups: ParamUserGroupMerge[];

	constructor(json?: JsonObject) {
		super(json);
		this.userGroups = (json?.userGroups || []).map((ug: any) => new ParamId(ug)) ?? [];
	}

	override createReply(json?: JsonObject): Reply {
		return new RepUserGroupBatchMerge(json);
	}
}