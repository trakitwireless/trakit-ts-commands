import { JsonObject } from "@trakit/objects";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { IPayListByUser } from "../../../API/Requests/IPayListByUser";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { ParamLogin } from "../../../API/Requests/Parameters/ParamLogin";
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

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
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

	constructor(json?: JsonObject) {
		super(json);
		this.user = new ParamLogin(json?.user as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepSessionListByUser(json);
	}
}