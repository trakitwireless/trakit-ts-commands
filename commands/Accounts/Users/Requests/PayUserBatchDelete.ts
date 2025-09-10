import { ParamLogin } from "commands/API/Requests/Parameters/ParamLogin";
import { Payload } from "../../../API/Requests/Payload";

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
		this.users = (json?.users ?? []).map((u: any) => new ParamLogin(u));
	}
}