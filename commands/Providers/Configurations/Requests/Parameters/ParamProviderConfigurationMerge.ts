import { JsonObject, nothing, serialization, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";

/**
 * Parameters used to create or update an {@link ProviderConfiguration}.
 **/
export class ParamProviderConfigurationMerge extends ParamMergeSubscribable {
	/**
	 * The unique identifier of the {@link ProviderConfiguration} you want to update.
	 * Leave this as `null` when creating a new {@link ProviderConfiguration}.
	 **/
	id: ulong | nothing;
	/**
	 * The {@link Company} to which this {@link ProviderConfiguration} belongs.
	 * After creation, this value is read-only.
	 **/
	company: ulong | nothing;
	/// <summary>
	/// The <see cref="ProviderConfigurationType"/> that the <see cref="ProviderConfiguration"/> implements.
	/// After creation, this value is read-only.
	/// </summary>
	type: ulong | nothing;
	/// <summary>
	/// Name for the <see cref="ProviderConfiguration"/>.
	/// </summary>
	name: string | nothing;
	/// <summary>
	/// Notes for the <see cref="ProviderConfiguration"/>.
	/// </summary>
	notes: string | nothing;
	/// <summary>
	/// The values needed to implement the <see cref="ProviderConfigurationType"/>.
	/// Each key in this object is the identifier of a required <see cref="ProviderConfigurationNode"/>.
	/// This command does not support patch semantics; all keys must be sent if any are sent.
	/// </summary>
	scriptParameters: Map<string, object> | nothing;
	/// <summary>
	/// A list of <see cref="Place"/>s whose shape is programmed directly onto <see cref="Provider"/>s to raise instant boundary events.
	/// </summary>
	geofences: ulong[] | nothing;
	
	constructor(json?: JsonObject) {
		super(json);
		this.id = json?.id as ulong;
		this.type = json?.type as ulong;
		this.name = json?.name as string;
		this.notes = json?.notes as string;
		this.scriptParameters = json?.scriptParameters
			? serialization.toMap(json?.scriptParameters as object)
			: null;
		this.geofences = json?.geofences as ulong[];
	}
	override toJSON(): any {
		const json: any = {};
		if (this.id) {
			json.id = this.id;
			json.v = [...this.v];
		} else {
			json.company = this.company;
			json.type = this.type;
		}
		if (this.name) json.name = this.name;
		if (this.notes) json.notes = this.notes;
		if (this.scriptParameters?.size) json.scriptParameters = serialization.fromMap(this.scriptParameters);
		if (this.geofences) json.geofences = this.geofences;
		return json;
	}
}