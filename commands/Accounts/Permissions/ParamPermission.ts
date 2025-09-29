import { nothing, PermissionLevel, PermissionMethod, PermissionType, ulong, utility } from "@trakit/objects";

/**
 * Similar to the {@link Permission} object, but the {@link company}, {@link level}, {@link method}, and {@link labels} are all optional.
 * <category>Users and Map</category>
 **/
export class ParamPermission {
	/**
	 * The {@link Company} that this permission targets.
	 * If not given, will default to the {@link UserAdvanced.company}, {@link UserGroup.company} or {@link Machine.company} to which it belongs.
	 * @see {@link Company.id}
	 **/
	company: ulong | nothing;
	/**
	 * The kind of {@link PermissionType}.
	 * <override required="always" />
	 **/
	kind: PermissionType | nothing;
	/**
	 * The level of access being defined.
	 * <override value="read"/>
	 **/
	level: PermissionLevel | nothing;
	/**
	 * The way the access is used.
	 * <override value="grant"/>
	 **/
	method: PermissionMethod | nothing;
	/**
	 * Codified names of {@link CompanyLabels.labels}.  If list is empty, this permission applies for all labels.
	 * <override>
	 * <values format="codified">
	 * @see {@link LabelStyle.code}
	 * </values>
	 * </override>
	 **/
	labels: string[] | nothing;

	constructor(json?: JsonObject) {
		this.company = json?.company;
		this.kind = json?.kind ?? json?.type;
		this.level = json?.level;
		this.method = json?.method;
		this.labels = json?.labels;
	}

	toJSON(): any {
		const json: JsonObject = {};
		if (utility.isntNaN(this.company as number)) {
			json["company"] = this.company;
		}
		if ((this.kind as PermissionType) in PermissionType) {
			json["kind"] = this.kind;
		}
		if ((this.level as PermissionLevel) in PermissionLevel) {
			json["level"] = this.level;
		}
		if ((this.method as PermissionMethod) in PermissionMethod) {
			json["method"] = this.method;
		}
		if (this.labels?.length ?? 0 > 0) {
			json["labels"] = [...this.labels as string[]];
		}
		return json;
	}
}