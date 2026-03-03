import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamLogin } from "../../../API/Requests/Parameters/ParamLogin";
import { Payload } from "../../../API/Requests/Payload";

/**
 * A container for the {@link user} object.
 */
export abstract class PayUser extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link User}.
	 */
	user: ParamLogin;

	constructor(json?: JsonObject) {
		super(json);
		this.user = new ParamLogin(json?.user as JsonObject);
	}
	
	/**
	 * 
	 */
	getKey(): string {
		return this.user?.login ?? "";
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			user: this.user.toJSON(),
		};
	}
}