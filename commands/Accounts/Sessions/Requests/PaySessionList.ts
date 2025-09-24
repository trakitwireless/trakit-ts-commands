import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { ParamLogin } from "commands/API/Requests/Parameters/ParamLogin";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { IPayListByUser } from "../../../API/Requests/IPayListByUser";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepSessionListByCompany, RepSessionListByUser } from "../Responses/RepSessionList";

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

	override createReply(json: any): Reply {
		return new RepSessionListByCompany(json);
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

	override createReply(json: any): Reply {
		return new RepSessionListByUser(json);
	}
}