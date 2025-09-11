import { ParamId } from "commands";
import { Payload } from "../../../API/Requests/Payload";
import { ParamUserGroupMerge } from "./Parameters/ParamUserGroupMerge";

/**
 * 
 **/
export class PayUserGroupBatchMerge extends Payload {
	/**
	 * 
	 **/
	userGroups: ParamUserGroupMerge[];

	constructor(json?: any) {
		super(json);
		this.userGroups = (json?.userGroups || []).map((ug: any) => new ParamId(ug)) ?? [];
	}
}