import { guid, PasswordPolicy, SessionPolicy,utility } from '@trakit/objects';
import { Reply } from "../../../API/Responses/Reply";
import { SelfMachine } from "./Content/SelfMachine";
import { SelfUser } from "./Content/SelfUser";

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
	user: SelfUser | null;
	/**
	 * This {@link Machine}'s details (if the service is being used by a {@link Machine}).
	 * If this value is not present, then the session is not a machine account.
	 **/
	machine: SelfMachine | null;
	/**
	 * This {@link User}'s {@link CompanyPolicies.sessionPolicy}.
	 **/
	sessionPolicy: SessionPolicy;
	/**
	 * This {@link User}'s {@link CompanyPolicies.passwordPolicy}.
	 **/
	passwordPolicy: PasswordPolicy;
	/**
	 * The UTC date/time of the server hosting the connection.
	 **/
	serverTime: Date;

	constructor(json: any) {
		super(json);

		this.ghostId = json["ghostId"] ?? "";
		this.expiry = utility.date(json["expiry"]);
		this.user = json["user"]
			? new SelfUser(json["user"])
			: null;
		this.machine = json["machine"]
			? new SelfMachine(json["machine"])
			: null;
		this.sessionPolicy = SessionPolicy.fromJSON(json["sessionPolicy"]);
		this.passwordPolicy = PasswordPolicy.fromJSON(json["passwordPolicy"]);
		this.serverTime = utility.date(json["serverTime"]);
	}
}