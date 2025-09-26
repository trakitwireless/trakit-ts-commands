import {
	Contact,
	guid,
	Machine,
	nothing,
	PasswordPolicy,
	SessionPolicy,
	storage,
	User,
	utility,
} from '@trakit/objects';
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link User} or {@link Machine} of the current session.
 **/
export class RepSelfGet extends Reply {
	/**
	 * Your session identifier.
	 **/
	ghostId: guid;
	/**
	 * The timestamp of when this session expires.
	 **/
	expiry: Date;
	/**
	 * This session's {@link User} details (if the service is being used by a {@link User}).
	 * If this value is not present, then the session is not yet authenticated.
	 **/
	user: User | nothing;
	/**
	 * This {@link Machine}'s details (if the service is being used by a {@link Machine}).
	 * If this value is not present, then the session is not a machine account.
	 **/
	machine: Machine | nothing;
	/**
	 * This {@link User}'s {@link CompanyPolicies.sessionPolicy}.
	 **/
	sessionPolicy: SessionPolicy | nothing;
	/**
	 * This {@link User}'s {@link CompanyPolicies.passwordPolicy}.
	 **/
	passwordPolicy: PasswordPolicy | nothing;
	/**
	 * The UTC date/time of the server hosting the connection.
	 **/
	serverTime: Date;

	constructor(json?: any) {
		super(json);
		this.serverTime = utility.date(json?.["serverTime"]);
		this.ghostId = json?.["ghostId"] ?? "";
		this.expiry = utility.date(json?.["expiry"]);

		const jsonUser = json?.["user"],
			jsonContact = jsonUser?.["contact"],
			jsonMachine = json?.["machine"];
		if (jsonUser) {
			if (jsonContact) {
				jsonUser["contact"] = (
					storage.contacts.get(jsonContact.id)?.fromJSON(jsonContact)
					?? storage.contacts.set(jsonContact.id, new Contact(jsonContact))
				)
					&& jsonContact.id;
			}
			(this.user = storage.users.get(jsonUser.login))?.fromJSON(jsonUser)
				?? storage.users.set(jsonUser.login, this.user = new User(jsonUser));
		} else if (jsonMachine) {
			(this.machine = storage.machines.get(jsonMachine.key))?.fromJSON(jsonMachine)
				?? storage.machines.set(jsonMachine.key, this.machine = new Machine(jsonMachine));
		}

		this.sessionPolicy = json?.["sessionPolicy"]
			? SessionPolicy.fromJSON(json["sessionPolicy"])
			: null;
		this.passwordPolicy = json?.["passwordPolicy"]
			? PasswordPolicy.fromJSON(json["passwordPolicy"])
			: null;
	}
}