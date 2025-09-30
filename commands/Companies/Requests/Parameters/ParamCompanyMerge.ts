import { JsonObject, LabelStyle, nothing, serialization, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../API/Requests/Parameters/ParamMergeSubscribable";
import { ParamPasswordPolicy } from "./ParamPasswordPolicy";
import { ParamSessionPolicy } from "./ParamSessionPolicy";

/**
 * Parameters used to create or update an {@link Company}.
 **/
export class ParamCompanyMerge extends ParamMergeSubscribable {
	/**
	 * Unique identifier of the Company.
	 **/
	id: ulong | nothing;
	/**
	 * The unique identifier of this company's parent organization.
	 **/
	parent: ulong | nothing;
	/**
	 * The organizational name.
	 **/
	name: string | nothing;
	/**
	 * Notes.
	 **/
	notes: string | nothing;
	/**
	 * Name/value collections of custom fields used to refer to external systems.
	 * If the value is null, the references are removed from the {@link Company}.
	 **/
	references: Map<string, string | nothing> | nothing;
	/**
	 * The list of Contacts from this and other companies broken down by contact role.
	 **/
	directory: Map<string, ulong[] | nothing> | nothing;
	/**
	 * The styles for labels added to Assets, Places, and other things.
	 **/
	labels: Map<string, LabelStyle | nothing> | nothing;
	/**
	 * The styles for status tags added to Assets.
	 **/
	tags: Map<string, LabelStyle | nothing> | nothing;
	/**
	 * The session lifetime policy.
	 **/
	sessionPolicy: ParamSessionPolicy | nothing;
	/**
	 * The password complexity and expiry policy.
	 **/
	passwordPolicy: ParamPasswordPolicy | nothing;

	constructor(json?: JsonObject) {
		super(json);
		this.id = json?.id as ulong;
		this.parent = json?.parent as ulong;
		this.name = json?.name as string;
		this.notes = json?.notes as string;
		this.references = serialization.toMap(json?.references as object);
		this.directory = serialization.toMap(json?.directory as object);
		this.labels = serialization.toMap(json?.labels as object);
		this.tags = serialization.toMap(json?.tags as object);
		this.sessionPolicy = json?.sessionPolicy
			? new ParamSessionPolicy(json.sessionPolicy as JsonObject)
			: null;
		this.passwordPolicy = json?.passwordPolicy
			? new ParamPasswordPolicy(json.passwordPolicy as JsonObject)
			: null;
	}

	override toJSON(): any {
		const json: any = {}
		if (json.id) {
			json.id = this.id;
			json.v = [...this.v];
		} else {
			json.parent = this.parent;
		}
		if (this.name) json.name = this.name;
		if (this.notes) json.notes = this.notes;
		if (this.references) json.references = serialization.fromMap(this.references);
		if (this.directory) json.directory = serialization.fromMap(this.directory);
		if (this.labels) json.labels = serialization.fromMapPredicate(this.labels, (key, value) => [key, value?.toJSON() ?? null]);
		if (this.tags) json.tags = serialization.fromMapPredicate(this.tags, (key, value) => [key, value?.toJSON() ?? null]);
		json.sessionPolicy = this.sessionPolicy
			? this.sessionPolicy.toJSON()
			: null;
		json.passwordPolicy = this.passwordPolicy
			? this.passwordPolicy.toJSON()
			: null;
		return json;
	}
}