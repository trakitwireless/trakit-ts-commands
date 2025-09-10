import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamLogin } from "commands/API/Requests/Parameters/ParamLogin";

/**
 * A container for the {@link user} object.
 **/
export abstract class PayUser extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link User}.
	 **/
	user: ParamLogin;

	constructor(json: any) {
		super();
		this.user = new ParamLogin(json?.user);
	}
	
	/**
	 * 
	 **/
	getKey(): string {
		return this.user?.login ?? "";
	}
}