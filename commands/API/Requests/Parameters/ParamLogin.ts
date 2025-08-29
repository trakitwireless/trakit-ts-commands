import { email } from "@trakit/objects";

/**
 * A container class used to house the login identifying a {@link User}.
 * Used specifically to get session details.
 **/
export class ParamLogin {
	/**
	 * The {@link User}'s login.
	 **/
	login!: email;
}