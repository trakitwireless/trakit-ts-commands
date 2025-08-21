import { Reply } from "../../../API/Responses/Reply";
import { SelfMachine } from "./Content/SelfMachine";
import { SelfUser } from "./Content/SelfUser";
import { SessionPolicy } from "@objects/Companies/SessionPolicy";
import { PasswordPolicy } from "@objects/Companies/PasswordPolicy";

/**
 * A container for the {@link User} or {@link Machine} of the current session.
 **/
export class RepSelfGet extends Reply {
	/**
	 * Your session identifier.
	 **/
	ghostId: string | undefined;
	/**
	 * The timestamp of when this session expires.
	 **/
	expiry: Date | undefined;
	/**
	 * This session's {@link User} details (if the service is being used by a {@link User}).
	 * If this value is not present, then the session is not yet authenticated.
	 **/
	user: SelfUser | undefined;
	/**
	 * This {@link Machine}'s details (if the service is being used by a {@link Machine}).
	 * If this value is not present, then the session is not a machine account.
	 **/
	machine: SelfMachine | undefined;
	/**
	 * This {@link User}'s {@link CompanyPolicies.sessionPolicy}.
	 **/
	sessionPolicy: SessionPolicy | undefined;
	/**
	 * This {@link User}'s {@link CompanyPolicies.passwordPolicy}.
	 **/
	passwordPolicy: PasswordPolicy | undefined;
	/**
	 * The UTC date/time of the server hosting the connection.
	 **/
	serverTime!: Date;
}