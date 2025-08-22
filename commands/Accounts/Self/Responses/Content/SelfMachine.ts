import { Machine } from "@objects/Accounts/Machine";

/**
 * A container for the details of the {@link Machine} requested.
 **/
export class SelfMachine extends Machine {
	/**
	 * A list of groups to which this machine account belongs.
	 * @see {@link UserGroup.id}
	 **/
		new public UserGroup[] groups;}