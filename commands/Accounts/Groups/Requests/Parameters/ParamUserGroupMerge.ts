import { JsonObject, nothing, ulong, utility } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
import { ParamPermission } from "../../../Permissions/ParamPermission";

/**
 * Parameters used to create or update an {@link UserGroup}.
 */
export class ParamUserGroupMerge extends ParamMergeSubscribable {
	/**
	 * The unique identifier of the {@link UserGroup} you want to update.
	 */
	id: ulong | nothing;
	/**
	 * The company to which this {@link UserGroup} belongs.
	 * After creation, this value is read-only.
	 */
	company: ulong | nothing;
	/**
	 * Name for the {@link UserGroup}.
	 */
	name: string | nothing;
	/**
	 * Notes for the {@link UserGroup}.
	 */
	notes: string | nothing;
	/**
	 * List of permissions assigned to members of this {@link UserGroup}.
	 */
	permissions: ParamPermission[] | nothing;

	constructor(json?: JsonObject) {
		super(json);
		this.id = json?.id as ulong;
		this.company = json?.company as ulong;
		this.name = json?.name as string;
		this.notes = json?.notes as string;
		this.permissions = (json?.permissions as JsonObject[])?.map((p: any) => new ParamPermission(p));
	}

	override toJSON(): any {
		const json: any = {};
		if (utility.isntNaN(this.id)) {
			json["id"] = this.id;
			json["v"] = [...this.v];
		} else if (utility.isntNaN(this.company)) {
			json["company"] = this.company;
		}
		if (this.name) json["name"] = this.name;
		if (this.notes) json["notes"] = this.notes;
		if (this.permissions?.length) json["permissions"] = (this.permissions as ParamPermission[]).map(p => p.toJSON());
		return json;
	}
}