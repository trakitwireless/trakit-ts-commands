import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamUserMerge } from "./Parameters/ParamUserMerge";

/**
 * Creates a new or updates an existing {@link User}.
 **/
export class PayUserMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link User}.
	 **/
	user: ParamUserMerge;

	constructor(json?: any) {
		super(json);
		this.user = new ParamUserMerge(json?.user);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.user?.login ?? "";
	}
}