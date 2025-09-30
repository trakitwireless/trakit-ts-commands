import { double, LatLng, nothing, PlaceType, ulong, utility } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../API/Requests/Parameters/ParamMergeSubscribable";

/**
 * Parameters used to create or update an {@link Place}.
 */
export class ParamPlaceMerge extends ParamMergeSubscribable {
	/// <summary>
	/// The unique identifier of the <see cref="Place"/> you want to update.
	/// </summary>
	/// <override required="update" />
	id: ulong | nothing;
	/// <summary>
	/// The <see cref="Company"/> to which this <see cref="Place"/> belongs.
	/// After creation, this value is read-only.
	/// </summary>
	/// <override required="create" />
	company: ulong | nothing;
	/// <summary>
	/// Name for the <see cref="Place"/>.
	/// </summary>
	/// <override required="create" max-length="100" />
	name: string | nothing;
	/// <summary>
	/// Notes for the <see cref="Place"/>.
	/// </summary>
	notes: string | nothing;
	/// <summary>
	/// The kind of shape being created.
	/// </summary>
	/// <override required="create" />
	kind: PlaceType | nothing;
	/// <summary>
	/// Full street address including province/state, country, and postal/zip code.
	/// </summary>
	address: string | nothing;
	/// <summary>
	/// The <see cref="Icon"/> used to display this POI in lists and on the map.
	/// </summary>
	/// <override required="create" />
	/// <seealso cref="Icon.id" />
	icon: ulong | nothing;
	/// <summary>
	/// The codified names of labels
	/// </summary>
	/// <override>
	/// <values format="codified">
	/// <seealso cref="LabelStyle.code" />
	/// </values>
	/// </override>
	labels: codified[] | nothing;
	/// <summary>
	/// The fill colour given to this <see cref="Place"/> for easy visual identification on the map.
	/// </summary>
	/// <override max-length="22" format="colour" />
	colour: string | nothing;
	/// <summary>
	/// Central lat/long coordinates.
	/// When not present, the shape centre is used for routing.
	/// </summary>
	anchor: LatLng | nothing;
	/// <summary>
	/// Boundary threshold (in meters)
	/// </summary>
	/// <override required="create (radial)" />
	radius: double | nothing;
	/// <summary>
	/// For a <see cref="PlaceType.rectangle"/>, the input contains the north east and south west corner coordinates.
	/// For a <see cref="PlaceType.polygon"/>, the input lists all coordinates (oriented as counter-clockwise) needed to draw the geofence.
	/// </summary>
	/// <override required="create (rectangle or polygon)" />
	shape: LatLng[] | nothing;
	/// <summary>
	/// The identifiers of <see cref="Picture"/>s of this <see cref="Place"/>.
	/// </summary>
	/// <override>
	/// <values>
	/// <seealso cref="Picture.id" />
	/// </values>
	/// </override>
	pictures: ulong[] | nothing;
	/// <summary>
	/// A custom field used to refer to an external system.
	/// </summary>
	/// <override max-length="100" />
	reference: string | nothing;
	
	constructor(json?: JsonObject) {
		super(json);
		this.id = json?.id as ulong;
		this.company = json?.company as ulong;
		this.name = json?.name as string;
		this.notes = json?.notes as string;
		this.kind = json?.kind;
		this.address = json?.address;
		this.icon = json?.icon;
		this.labels = json?.labels ?? null;
		this.colour = json?.colour;
		this.anchor = json?.anchor
			? LatLng.fromJSON(json.anchor)
			: null;
		this.radius = json?.radius;
		this.shape = (json?.shape as JsonObject[])?.map((item: any) => LatLng.fromJSON(item));
		this.pictures = (json?.pictures as JsonObject[])?.map((item: any) => item);
		this.reference = json?.reference;
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
		if (this.kind) json.kind = this.kind;
		if (this.address) json.address = this.address;
		if (this.icon) json.icon = this.icon;
		if (this.labels?.length) json.labels = [...this.labels];
		if (this.colour) json.colour = this.colour;
		if (this.anchor?.isValid()) json.anchor = this.anchor.toJSON();
		if (!utility.isNaN(this.radius)) json.radius = this.radius;
		if (this.shape?.length) json.shape = this.shape.map((item: LatLng) => item.toJSON());
		if (this.pictures?.length) json.pictures = [...this.pictures];
		if (this.reference) json.reference = this.reference;
		return json;
	}

	/// <summary>
	/// True when a <see cref="PlaceType.polygon"/> or <see cref="PlaceType.rectangle"/> shape has enough coordinates given.
	/// </summary>
	validPoints(): boolean {
		return this.kind === PlaceType.polygon
			? this.shape?.length as number >= 3
			: this.kind === PlaceType.rectangle
				? this.shape?.length as number === 2
				: this.anchor?.isValid() ?? false;
	}
	/// <summary>
	/// True when a <see cref="PlaceType.radial"/> radius is within the allowed size range.
	/// </summary>
	validRadius(): boolean {
		return this.kind === PlaceType.radial
			&& !utility.isNaN(this.radius);
	}
}