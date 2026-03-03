import { datetime, JsonObject, LatLng, nothing, timespan, TimeSpan, ulong, utility } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";

/**
 * Parameter values for updating the {@link DispatchStep} for a {@link DispatchJob}.
 */
export class ParamDispatchStepMerge extends ParamMergeSubscribable {
	/**
	 * The identifier of the step.
	 * Identifiers are unique to a {@link DispatchJob}, but are not unique system-wide.
	 */
	id: ulong | nothing;
	/**
	 * A name for the work needed to be performed.
	 */
	name: string | nothing;
	/**
	 * The optional estimated time of arrival for the asset.
	 */
	eta: Date | nothing;
	/**
	 * The optional expected duration of the work for this step.
	 */
	duration: TimeSpan | nothing;
	/**
	 * An optional place which can be used as a template instead of providing lat/long coordinates and a street address.
	 * @see {@link Place.id}
	 */
	place: ulong | nothing;
	/**
	 * The street address of where the step must be completed.
	 */
	address: string | nothing;
	/**
	 * The lat/long coordinates of where the step must be {@link DispatchStepStatus.completed}.
	 */
	latlng: LatLng | nothing;
	/**
	 * When true, will mean a signature is required to complete this {@link DispatchStep}.
	 */
	signature: boolean | nothing;

	constructor(json?: JsonObject) {
		super(json);
		this.id = json?.id as ulong;
		this.name = json?.name as string;
		this.eta = json?.eta
			? utility.date(json.eta as datetime)
			: null;
		this.duration = json?.duration
			? new TimeSpan(json.duration as timespan)
			: null;
		this.place = json?.place as ulong;
		this.address = json?.address as string;
		this.latlng = json?.latlng
			? LatLng.fromJSON(json.latlng as JsonObject)
			: null;
		this.signature = json?.signature as boolean;
	}

	override toJSON(): JsonObject {
		const json: JsonObject = {};
		if (this.id) json.id = this.id;
		if (this.name) json.name = this.name;
		if (this.eta) json.eta = this.eta.toISOString();
		if (this.duration) json.duration = this.duration.toString();
		if (this.place) json.place = this.place;
		if (this.address) json.address = this.address;
		if (this.latlng) json.latlng = this.latlng.toJSON() as any as JsonObject;
		if (this.signature) json.signature = this.signature;
		return json;
	}
}