import { Reply } from "../../../API/Responses/Reply";
import { SelfMachine } from "./Content/SelfMachine";
import { SelfUser } from "./Content/SelfUser";
import { SessionPolicy } from "@objects/Companies/SessionPolicy";
import { PasswordPolicy } from "@objects/Companies/PasswordPolicy";

/**
 * A container for the <see cref="User"/> or <see cref="Machine"/> of the current session.
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
	 * This session's <see cref="User"/> details (if the service is being used by a <see cref="User"/>).
	 * If this value is not present, then the session is not yet authenticated.
	 **/
	user: SelfUser | undefined;
	/**
	 * This <see cref="Machine"/>'s details (if the service is being used by a <see cref="Machine"/>).
	 * If this value is not present, then the session is not a machine account.
	 **/
	machine: SelfMachine | undefined;
	/**
	 * This <see cref="User"/>'s <see cref="CompanyPolicies.sessionPolicy"/>.
	 **/
	sessionPolicy: SessionPolicy | undefined;
	/**
	 * This <see cref="User"/>'s <see cref="CompanyPolicies.passwordPolicy"/>.
	 **/
	passwordPolicy: PasswordPolicy | undefined;
	/**
	 * The UTC date/time of the server hosting the connection.
	 **/
	serverTime!: Date;
}