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

	constructor(json: JsonObject) {
		super(json);
		this.serverTime = utility.date(json?.serverTime as datetime);
		this.ghostId = json?.ghostId as guid ?? "";
		this.expiry = utility.date(json?.expiry as datetime);

		const jsonUser = json?.user as JsonObject,
			jsonContact = jsonUser?.contact as JsonObject,
			jsonMachine = json?.machine as JsonObject;
		if (jsonUser) {
			if (jsonContact) {
				(jsonUser as any).contact = (
					storage.contacts.get(jsonContact.id as ulong)?.fromJSON(jsonContact)
					?? storage.contacts.set(jsonContact.id as ulong, new Contact(jsonContact))
				)
					&& jsonContact.id;
			}
			(this.user = storage.users.get(jsonUser.login as email))?.fromJSON(jsonUser)
				?? storage.users.set(jsonUser.login as email, this.user = new User(jsonUser));
		} else if (jsonMachine) {
			(this.machine = storage.machines.get(jsonMachine.key as string))?.fromJSON(jsonMachine)
				?? storage.machines.set(jsonMachine.key as string, this.machine = new Machine(jsonMachine));
		}

		this.sessionPolicy = json?.sessionPolicy
			? SessionPolicy.fromJSON(json.sessionPolicy as JsonObject)
			: null;
		this.passwordPolicy = json?.passwordPolicy
			? PasswordPolicy.fromJSON(json.passwordPolicy as JsonObject)
			: null;
	}

	toJSON(): any {
		const json: any = {
			"errorCode": this.errorCode,
			"message": this.message,
			"errorDetails": this.errorDetails,
			"ghostId": this.ghostId,
			"expiry": utility.isntNaN(this.expiry.valueOf()) ? this.expiry.toISOString() : null,
			"serverTime": utility.isntNaN(this.serverTime.valueOf()) ? this.serverTime.toISOString() : null,
		};
		if (this.user) {
			json["user"] = this.user.toJSON();
			if (this.user.contact) {
				json["user"]["contact"] = this.user.contact.toJSON();
			}
		}
		if (this.machine) {
			json["machine"] = this.machine.toJSON();
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