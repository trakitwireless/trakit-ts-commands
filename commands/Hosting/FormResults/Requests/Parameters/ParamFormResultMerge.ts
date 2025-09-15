import { LatLng, nothing, serialization, ulong, utility } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";

/**
 * Parameters used to create or update an {@link FormResult}.
 */
export class ParamFormResultMerge extends ParamMergeSubscribable {
	/**
	 * The unique identifier of the {@link FormResult} you want to update.
	 */
	id: ulong | nothing;
	/**
	 * The unique identifier of the {@link Asset} filling out this form.
	 */
	asset: ulong | nothing;
	/**
	 * The unique identifier of the {@link FormTemplate} for this form.
	 */
	template: ulong | nothing;
	/**
	 * Name for the {@link FormResult}.
	 */
	name: string | nothing;
	/**
	 * Notes for the {@link FormResult}.
	 */
	notes: string | nothing;
	/**
	 * Codified label names used to relate forms to {@link Asset}s.
	 */
	labels: string[] | nothing;
	/**
	 * A collection of values for the {@link FormResult.fields}.
	 * You can update parts of the collection, the {@link FormResult} must have a value for all fields in order to complete it.
	 */
	fields: Map<string, string | nothing> | nothing;
	/**
	 * A timestamp from when the {@link FormResult} was completed.
	 */
	completed: Date | nothing;
	/**
	 * Coordinates from when the {@link FormResult} was completed.
	 */
	latlng: LatLng | nothing;
	
	constructor(json: any) {
		super(json);
		this.id = json?.id;
		this.asset = json?.asset;
		this.template = json?.template;
		this.name = json?.name;
		this.notes = json?.notes;
		this.labels = json?.labels;
		this.fields = json?.fields
			? serialization.toMap(json.fields)
			: null;
		this.completed = utility.date(json?.completed);
		this.latlng = json?.latlng
			? LatLng.fromJSON(json.latlng)
			: null;
	}

	override toJSON(): any {
		const json: any = {};
		if (this.id) {
			json.id = this.id;
			json.v = [...this.v];
		} else {
			json.template = this.template;
		}
		if (this.asset) json.asset = this.asset;
		if (this.name) json.name = this.name;
		if (this.notes) json.notes = this.notes;
		if (this.labels?.length) json.labels = [...this.labels];
		if (this.fields?.size) json.fields = serialization.fromMap(this.fields);
		if (this.completed?.valueOf()) json.completed = this.completed?.toISOString();
		if (this.latlng?.isValid()) json.latlng = this.latlng?.toJSON();
		return json;
	}
}