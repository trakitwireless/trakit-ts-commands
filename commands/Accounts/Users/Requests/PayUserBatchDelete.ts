import { Reply } from "../../../API/Responses/Reply";
import { ParamLogin } from "commands/API/Requests/Parameters/ParamLogin";
import { Payload } from "../../../API/Requests/Payload";
import { RepUserBatchDelete } from "../Responses/RepUserBatchDelete";

/**
 * 
 **/
export class PayUserBatchDelete extends Payload {
	/**
	 * 
	 **/
	users: ParamLogin[];

	constructor(json?: any) {
		super(json);
		this.users = json?.users?.map((u: any) => new ParamLogin(u)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepUserBatchDelete(json);
	}
}