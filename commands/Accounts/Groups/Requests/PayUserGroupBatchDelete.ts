import { JsonObject } from "@trakit/objects";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepUserGroupBatchDelete } from "../Responses/RepUserGroupBatchDelete";

/**
 * 
 **/
export class PayUserGroupBatchDelete extends Payload {
	/**
	 * 
	 **/
	userGroups: ParamId[];

	constructor(json?: JsonObject) {
		super(json);
		this.userGroups = (json?.userGroups as JsonObject[]).map((ug: any) => new ParamId(ug)) ?? [];
	}
	
	override createReply(json?: JsonObject): Reply {
		return new RepUserGroupBatchDelete(json as JsonObject);
	}
}