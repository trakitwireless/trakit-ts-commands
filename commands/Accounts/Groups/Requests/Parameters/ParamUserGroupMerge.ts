import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";

/**
 * Parameters used to create or update an <see cref="UserGroup"/>.
 **/
export class ParamUserGroupMerge extends ParamMergeSubscribable {
	/**
	 * The unique identifier of the <see cref="UserGroup"/> you want to update.
	 **/
	id: ulong | undefined;
	/**
	 * The company to which this <see cref="UserGroup"/> belongs.
	 * After creation, this value is read-only.
	 **/
	company: ulong | undefined;
	/**
	 * Name for the <see cref="UserGroup"/>.
	 **/
	name: string;
	/**
	 * Notes for the <see cref="UserGroup"/>.
	 **/
	notes: string;
	/**
	 * List of permissions assigned to members of this <see cref="UserGroup"/>.
	 **/
	permissions: ParamPermission[];}