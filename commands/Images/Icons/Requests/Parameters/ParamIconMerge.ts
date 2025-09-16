import { IconGlyph, IconLabel, nothing, ulong, utility } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";

/**
 * Parameters used to create or update an {@link Icon}.
 **/
export class ParamIconMerge extends ParamMergeSubscribable {
	/**
	 * The unique identifier of the {@link Icon} you want to update.
	 * Leave this as `null` when creating a new {@link Icon}.
	 **/
	id: ulong | nothing;
	/**
	 * The {@link Company} to which this {@link Icon} belongs.
	 * After creation, this value is read-only.
	 **/
	company: ulong | nothing;
	/**
	 * Name for the {@link Icon}.
	 **/
	name: string | nothing;
	/**
	 * Notes for the {@link Icon}.
	 **/
	notes: string | nothing;
	/// <summary>
	/// A noun to describe the type of thing represented.  Like Truck, Car, Trailer, Hot-Air Balloon, etc...
	/// </summary>
	/// <override max-length="100" />
	category: string | nothing;
	/// <summary>
	/// Indicates whether this <see cref="Icon"/> is available to child companies.
	/// </summary>
	global: boolean | nothing;
	/// <summary>
	/// A list of things that this <see cref="Icon"/> can be used to represent.  Like <c>asset</c>, <c>place</c>, <c>user</c>, etc...
	/// </summary>
	usage: string[] | nothing;
	/// <summary>
	/// Definition for the name bubble above the <see cref="Icon"/> on a map.
	/// </summary>
	label: IconLabel | nothing;
	/// <summary>
	/// Definition for the name badge beside the <see cref="Icon"/> on a map.
	/// </summary>
	badge: IconLabel | nothing;
	/// <summary>
	/// The images used to show the detail of this <see cref="Icon"/>.
	/// </summary>
	glyphs: IconGlyph[] | nothing;

	constructor(json: any) {
		super(json);
		this.id = json?.id;
		this.company = json?.company;
		this.name = json?.name;
		this.notes = json?.notes;
		this.category = json?.category;
		this.global = json?.global;
		this.usage = json?.usage;
		this.label = json?.label
			? IconLabel.fromJSON(json?.label)
			: null;
		this.badge = json?.badge
			? IconLabel.fromJSON(json?.badge)
			: null;
		this.glyphs = json?.glyphs?.map((glyph: any) => IconGlyph.fromJSON(glyph));
	}

	override toJSON(): any {
		const json: any = {};
		if (this.id) {
			json.id = this.id;
			json.v = [...this.v];
		} else {
			json.company = this.company;
		}
		if (this.name) json.name = this.name;
		if (this.notes) json.notes = this.notes;
		if (this.category) json.category = this.category;
		if (!utility.isNothing(this.global)) json.global = this.global;
		if (this.usage) json.usage = [...this.usage];
		if (this.label) json.label = this.label.toJSON();
		if (this.badge) json.badge = this.badge.toJSON();
		if (this.glyphs?.length) json.glyphs = this.glyphs.map((g) => g.toJSON());
		return json;
	}
}