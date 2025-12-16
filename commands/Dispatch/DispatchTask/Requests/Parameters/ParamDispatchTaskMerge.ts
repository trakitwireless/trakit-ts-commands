import { datetime, DispatchTaskStatus, JsonObject, LatLng, nothing, serialization, timespan, TimeSpan, ulong, utility } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";

/**
 * Parameters used to create a new, or update an existing {@link DispatchTask}.
 */
export class ParamDispatchTaskMerge extends ParamMergeSubscribable {
	/**
	 * The unique identifier of the {@link DispatchTask} you want to update.
	 */
	id: ulong | nothing;
	/**
	 * The identifier of the {@link Asset} assigned to this {@link DispatchTask}.
	 */
	asset: ulong | nothing;
	/**
	 * Name for the {@link DispatchTask}.
	 */
	name: string | nothing;
	/**
	 * Notes completed by the driver about the {@link DispatchTask}.
	 * Such as service notes, damaged goods upon pick-up, etc...
	 */
	notes: string | nothing;
	/**
	 * A custom field used to refer this {@link DispatchTask} an external system. Examples are a work order, pick-up, waybill, etc...
	 * If value is null, the field is removed from the {@link DispatchTask}.
	 * If a new value or null is not provided for a current attribute, no change is made.
	 */
	references: Map<string, string | nothing> | nothing;
	/**
	 * The street address of this {@link DispatchTask}.
	 * Condition: You must provide a `place`, a `latlng`, or an `address`.
	 * Note: If you ommit the `address`, the geocoder attempts to populate the field, but will not return an error if it fails.
	 */
	address: string | nothing;
	/**
	 * An optional identifier of a {@link Place} for this {@link DispatchTask}.  Using a {@link Place} makes detecting the "arrived" status more reliable.
	 * Condition: You must provide a `place`, a `latlng`, or an `address`.
	 * Note: If you invoke the geocoder, the `address` is also replaced with the geocoded value.
	 */
	place: ulong | nothing;
	/**
	 * Instructions for the driver to help them complete the {@link DispatchTask}.
	 * Such as which door to use, a buzz code to enter the facility, etc...
	 */
	instructions: string | nothing;
	/**
	 * A list of {@link Document} identifiers to attach to this {@link DispatchTask} for both driver and dispatcher review.
	 */
	attachments: ulong[] | nothing;
	/**
	 * The lat/long coordinates of the street address.
	 * Condition: You must provide a `place`, a `latlng`, or an `address`.
	 * Note: If you invoke the geocoder, the `address` is also replaced with the geocoded value.
	 */
	latlng: LatLng | nothing;
	/**
	 * Estimated time of arrival.
	 */
	eta: Date | nothing;
	/**
	 * The duration on site, or how much time is expected to complete the {@link DispatchTask}.  Used to help calculate other {@link DispatchTask} ETAs when routing is performed.
	 */
	duration: TimeSpan | nothing;
	/**
	 * {@link DispatchTask}s have a lifetime and each status represents a {@link DispatchTask}'s progress through it's life.
	 */
	status: DispatchTaskStatus | nothing;

	constructor(json?: JsonObject) {
		super(json);
		this.id = json?.id as ulong;
		this.asset = json?.asset as ulong;
		this.name = json?.name as string;
		this.notes = json?.notes as string;
		this.references = json?.references
			? serialization.toMap(json.references as JsonObject)
			: null;
		this.address = json?.address as string;
		this.place = json?.place as ulong;
		this.instructions = json?.instructions as string;
		this.attachments = json?.attachments as ulong[];
		this.latlng = json?.latlng
			? LatLng.fromJSON(json.latlng as JsonObject)
			: null;
		this.eta = json?.eta
			? utility.date(json.eta as datetime)
			: null;
		this.duration = json?.duration
			? new TimeSpan(json.duration as timespan)
			: null;
		this.status = json?.status as DispatchTaskStatus;
	}

	override toJSON(): any {
		const json: any = {};
		if (this.id) json.id = this.id;
		if (this.asset) json.asset = this.asset;
		if (this.name) json.name = this.name;
		if (this.notes) json.notes = this.notes;
		if (this.references?.size) json.references = serialization.fromMap(this.references);
		if (this.address) json.address = this.address;
		if (this.place) json.place = this.place;
		if (this.instructions) json.instructions = this.instructions;
		if (this.attachments) json.attachments = this.attachments;
		if (this.latlng?.isValid()) json.latlng = this.latlng.toJSON();
		if (utility.isntNaN(this.eta?.valueOf())) json.eta = this.eta.toISOString();
		if (utility.isntNaN(this.duration?.valueOf())) json.duration = this.duration.toString();
		if (this.status) json.status = this.status;
		return json;
	}
}