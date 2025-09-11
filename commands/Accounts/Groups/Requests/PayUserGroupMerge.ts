import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamUserGroupMerge } from "./Parameters/ParamUserGroupMerge";

/**
 * Creates a new or updates an existing {@link UserGroup}.
 **/
export class PayUserGroupMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link UserGroup}.
	 **/
	userGroup: ParamUserGroupMerge;

	constructor(json?: any) {
		super(json);
		this.userGroup = new ParamUserGroupMerge(json?.userGroup);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.userGroup?.id?.toString() ?? "";
	}
}