import { nothing, ulong, utility } from "@trakit/objects";
import { ParamPermission } from "../../../Permissions/ParamPermission";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";

/**
 * Parameters used to create or update an {@link UserGroup}.
 **/
export class ParamUserGroupMerge extends ParamMergeSubscribable {
	/**
	 * The unique identifier of the {@link UserGroup} you want to update.
	 **/
	id: ulong | nothing;
	/**
	 * The company to which this {@link UserGroup} belongs.
	 * After creation, this value is read-only.
	 **/
	company: ulong | nothing;
	/**
	 * Name for the {@link UserGroup}.
	 **/
	name: string | nothing;
	/**
	 * Notes for the {@link UserGroup}.
	 **/
	notes: string | nothing;
	/**
	 * List of permissions assigned to members of this {@link UserGroup}.
	 **/
	permissions: ParamPermission[] | nothing;

	constructor(json: any) {
		super(json);
		this.id = json?.id;
		this.company = json?.company;
		this.name = json?.name;
		this.notes = json?.notes;
		this.permissions = json?.permissions?.map((p: any) => new ParamPermission(p));
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