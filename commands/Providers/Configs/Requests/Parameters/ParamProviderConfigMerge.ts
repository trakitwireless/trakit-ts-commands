import { expression, JsonObject, nothing, serialization, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";

/**
 * Parameters used to create or update an {@link ProviderConfig}.
 **/
export class ParamProviderConfigMerge extends ParamMergeSubscribable {
	/**
	 * The unique identifier of the {@link ProviderConfig} you want to update.
	 * Leave this as `null` when creating a new {@link ProviderConfig}.
	 **/
	id: ulong | nothing;
	/**
	 * The {@link Company} to which this {@link ProviderConfig} belongs.
	 * After creation, this value is read-only.
	 **/
	company: ulong | nothing;
	/// <summary>
	/// The <see cref="ProviderScript"/> to the <see cref="ProviderConfig"/> implements.
	/// After creation, this value is read-only.
	/// </summary>
	script: ulong | nothing;
	/// <summary>
	/// Name for the <see cref="ProviderConfig"/>.
	/// </summary>
	name: string | nothing;
	/// <summary>
	/// Notes for the <see cref="ProviderConfig"/>.
	/// </summary>
	notes: string | nothing;
	/// <summary>
	/// The values needed to implement the script.
	/// Each key in this object is the name of a required script variable.
	/// </summary>
	parameters: Map<string, string> | nothing;
	/// <summary>
	/// A search pattern used to filter which Places' geometry are used as geofences.
	/// Use null or blank string to disable.
	/// Use "*" to match all the Places the Provider's Asset can match.
	/// Or use "#123456" or "label:term" like other Place search patterns.
	/// </summary>
	geofences: string | nothing;
	
	constructor(json?: JsonObject) {
		super(json);
		this.id = json?.id as ulong;
		this.script = json?.script as ulong;
		this.name = json?.name as string;
		this.notes = json?.notes as string;
		this.parameters = json?.parameters
			? serialization.toMap(json?.parameters as object)
			: null;
		this.geofences = json?.geofences as expression;
	}

	override toJSON(): any {
		const json: any = {};
		if (this.id) {
			json.id = this.id;
			json.v = [...this.v];
		} else {
			json.script = this.script;
		}
		if (this.name) json.name = this.name;
		if (this.notes) json.notes = this.notes;
		if (this.parameters?.size) json.parameters = serialization.fromMap(this.parameters);
		if (this.geofences) json.geofences = this.geofences;
		return json;
	}
}