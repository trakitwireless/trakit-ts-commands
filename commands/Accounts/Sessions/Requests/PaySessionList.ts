import { Payload } from "../../../API/Requests/Payload";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { IPayListByUser } from "../../../API/Requests/IPayListByUser";
import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { ParamLogin } from "commands/API/Requests/Parameters/ParamLogin";

/**
 * Gets the list of {@link Session} for the specified {@link Company}.
 **/
export class PaySessionListByCompany extends Payload implements IPayListByCompany {
	/**
	 * An object to contain the "id" of the {@link Company}.
	 **/
	company: ParamId;

	constructor(json: any) {
		super(json);
		this.company = new ParamId(json?.company);
	}
}

/**
 * Gets the list of {@link Session}s for the specified {@link User}.
 **/
export class PaySessionListByUser extends Payload implements IPayListByUser {
	/**
	 * An object to contain the "login" of the {@link User}.
	 **/
	user: ParamLogin;

	constructor(json: any) {
		super(json);
		this.user = new ParamLogin(json?.user);
	}
}