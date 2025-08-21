import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * A container for the {@link user} object.
 **/
export abstract class PayUser extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link User}.
	 **/
	user: ParamLogin;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.user?.login ?? "";
		}}