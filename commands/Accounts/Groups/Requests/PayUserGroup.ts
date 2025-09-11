import { nothing } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";

/**
 * A container for the {@link userGroup} object.
 **/
export abstract class PayUserGroup extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link UserGroup}.
	 **/
	userGroup: ParamId | nothing;

	constructor(json?: any) {
		super(json);
		if (json) this.userGroup = new ParamId(json["userGroup"]);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.userGroup?.id?.toString() ?? "";
	}
}