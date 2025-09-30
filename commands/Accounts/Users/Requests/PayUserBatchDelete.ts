import { JsonObject } from "@trakit/objects";
import { ParamLogin } from "../../../API/Requests/Parameters/ParamLogin";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepUserBatchDelete } from "../Responses/RepUserBatchDelete";

/**
 * 
 **/
export class PayUserBatchDelete extends Payload {
	/**
	 * 
	 **/
	users: ParamLogin[];

	constructor(json?: JsonObject) {
		super(json);
		this.users = (json?.users as JsonObject[])?.map((u: any) => new ParamLogin(u)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepUserBatchDelete(json as JsonObject);
	}
}