import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing {@link UserGroup}.
 **/
export class PayUserGroupMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link UserGroup}.
	 **/
	userGroup: ParamUserGroupMerge;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.userGroup?.id?.ToString() ?? "";
		}}