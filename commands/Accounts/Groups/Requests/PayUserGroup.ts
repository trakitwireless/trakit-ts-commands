import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";

/**
 * A container for the @link {userGroup} object.
 **/
export abstract class PayUserGroup extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the @link {UserGroup}.
	 **/
	userGroup: ParamId | undefined;

	/**
	 * 
	 **/
	getKey(): string {
		return this.userGroup?.id.ToString() ?? "";
	}
}