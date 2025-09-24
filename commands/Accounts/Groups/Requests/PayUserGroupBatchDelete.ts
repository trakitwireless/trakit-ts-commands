import { Reply } from "commands/API/Responses/Reply";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { RepUserGroupBatchDelete } from "../Responses/RepUserGroupBatchDelete";

/**
 * 
 **/
export class PayUserGroupBatchDelete extends Payload {
	/**
	 * 
	 **/
	userGroups: ParamId[];

	constructor(json?: any) {
		super(json);
		this.userGroups = (json?.userGroups || []).map((ug: any) => new ParamId(ug)) ?? [];
	}
	
	override createReply(json: any): Reply {
		return new RepUserGroupBatchDelete(json);
	}
}