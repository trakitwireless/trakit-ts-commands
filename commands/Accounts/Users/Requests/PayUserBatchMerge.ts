import { Payload } from "../../../API/Requests/Payload";
import { ParamUserMerge } from "./Parameters/ParamUserMerge";

/**
 * 
 **/
export class PayUserBatchMerge extends Payload {
	/**
	 * 
	 **/
	users: ParamUserMerge[];

	constructor(json?: any) {
		super(json);
		this.users = json?.users?.map((u: any) => new ParamUserMerge(u)) ?? [];
	}
}