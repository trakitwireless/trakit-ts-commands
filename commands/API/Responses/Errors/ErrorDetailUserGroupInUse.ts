import { email, JsonObject, nothing } from "@trakit/objects";
import { ErrorDetail } from "./ErrorDetail";
import { ErrorDetailType } from "./ErrorDetailType";

/**
 * Details for how many and which {@link User}s are still in the {@link UserGroup}.
 **/
export class ErrorDetailUserGroupInUse extends ErrorDetail {
	override get kind() { return ErrorDetailType.userGroupInUse; }
	/**
	 * A list of {@link User}s currently being referenced.
	 **/
	users: string[] | nothing;
	/**
	 * A list of {@link User}s currently being referenced.
	 **/
	machines: string[] | nothing;

	constructor(json: JsonObject) {
		super();
		this.users = json?.users as email[];
		this.machines = json?.machines as string[];
	}
}