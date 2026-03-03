import { JsonObject } from "@trakit/objects";
import { nothing, Rectangle, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";

/**
 * Parameters used to create or update an {@link Picture}.
 */
export class ParamPictureMerge extends ParamMergeSubscribable {
	/**
	 * The unique identifier of the {@link Picture} you want to update.
	 * Leave this as `null` when creating a new {@link Picture}.
	 */
	id: ulong | nothing;
	/**
	 * The {@link Company} to which this {@link Picture} belongs.
	 * After creation, this value is read-only.
	 */
	company: ulong | nothing;
	/**
	 * Name for the {@link Picture}.
	 */
	name: string | nothing;
	/**
	 * Notes for the {@link Picture}.
	 */
	notes: string | nothing;
	/// <summary>
	/// A list of focal points in the <see cref="Picture"/> like faces.
	/// </summary>
	focals: Rectangle[] | nothing;
	
	constructor(json?: JsonObject) {
		super(json);
		this.id = json?.id as ulong;
		this.company = json?.company as ulong;
		this.name = json?.name as string;
		this.notes = json?.notes as string;
		this.focals = (json?.focals as JsonObject[])?.map((focal: any) => Rectangle.fromJSON(focal));
	}

	override toJSON(): JsonObject {
		const json: JsonObject = {}
		if (this.id) {
			json.id = this.id;
			json.v = [...this.v];
		} else {
			json.company = this.company as ulong;
		}
		if (this.name) json.name = this.name;
		if (this.notes) json.notes = this.notes;
		if (this.focals) json.focals = this.focals.map(focal => focal.toJSON() as any as JsonObject);
		return json;
	}
}