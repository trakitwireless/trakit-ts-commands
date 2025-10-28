import {
	Contact,
	datetime,
	email,
	guid, JsonObject, Machine,
	nothing,
	PasswordPolicy,
	SessionPolicy,
	storage,
	ulong,
	User,
	utility
} from "@trakit/objects";
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
	get user(): User | nothing { return storage.User.get(this.userLogin as email) as User; }
	/**
	 * 
	 */
	userLogin: email | nothing;
	/**
	 * This {@link Machine}'s details (if the service is being used by a {@link Machine}).
	 * If this value is not present, then the session is not a machine account.
	 **/
	get machine(): Machine | nothing { return storage.Machine.get(this.machineKey as string) as Machine; }
	/**
	 * 
	 */
	machineKey: string | nothing;
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

	constructor(json?: JsonObject) {
		super(json as JsonObject);
		this.serverTime = utility.date(json?.serverTime as datetime);
		this.ghostId = json?.ghostId as guid ?? "";
		this.expiry = utility.date(json?.expiry as datetime);
		this.userLogin = (json?.user as JsonObject)?.login as email;
		this.machineKey = (json?.machine as JsonObject)?.key as string;
		this.sessionPolicy = json?.sessionPolicy
			? SessionPolicy.fromJSON(json.sessionPolicy as JsonObject)
			: null;
		this.passwordPolicy = json?.passwordPolicy
			? PasswordPolicy.fromJSON(json.passwordPolicy as JsonObject)
			: null;
	}

	override toJSON(): JsonObject {
		const json: JsonObject = {
			"errorCode": this.errorCode,
			"message": this.message,
			"errorDetails": this.errorDetails?.toJSON() ?? null,
			"ghostId": this.ghostId,
			"expiry": utility.isntNaN(this.expiry.valueOf()) ? this.expiry.toISOString() : null,
			"serverTime": utility.isntNaN(this.serverTime.valueOf()) ? this.serverTime.toISOString() : null,
		};
		if (this.userLogin) {
			const user = this.user,
				contact = user?.contact;
			json["user"] = {
				...user?.toJSON(),
				"login": this.userLogin,
				"contact": contact?.toJSON() ?? null,
			};
		}
		if (this.machineKey) {
			json["machine"] = this.machine?.toJSON()
							?? { "key": this.machineKey };
		}
		if (this.sessionPolicy) {
			json["sessionPolicy"] = this.sessionPolicy.toJSON();
		}
		if (this.passwordPolicy) {
			json["passwordPolicy"] = this.passwordPolicy.toJSON();
		}
		return json;
	}
}