import { codified, colour, double, email, JsonObject, MaintenanceInterval, nothing, serialization, timespan, TimeSpan, uint, ulong, utility } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";

/**
 * Parameters used to create or update an {@link MaintenanceSchedule}.
 */
export class ParamMaintenanceScheduleMerge extends ParamMergeSubscribable {
	/**
	 * The unique identifier of the {@link MaintenanceSchedule} you want to update.
	 * Leave this as `null` when creating a new {@link MaintenanceSchedule}.
	 */
	id: ulong | undefined;
	/**
	 * The {@link Company} to which this {@link MaintenanceSchedule} belongs.
	 * After creation, this value is read-only.
	 */
	company: ulong | undefined;
	/**
	 * Name for the {@link MaintenanceSchedule}.
	 */
	name: string;
	/**
	 * Notes for the {@link MaintenanceSchedule}.
	 */
	notes: string;

	/// <summary>
	/// Which <see cref="Asset"/>s are targetted by this <see cref="MaintenanceSchedule"/>.
	/// </summary>
	/// <override type="System.String" format="expression" />
	targets: string | nothing;
	/// <summary>
	/// List of Users to send notifications.
	/// </summary>
	/// <see cref="User.login" />
	/// <override>
	/// <values format="email" />
	/// </override>
	notify: email[] | nothing;

	/// <summary>
	/// The fill/background colour of the icon.  Should be a hex colour in the format #RRGGBB.
	/// </summary>
	/// <override max-length="22" />
	fill: string | nothing;
	/// <summary>
	/// Outline and graphic colour.  Should be a hex colour in the format #RRGGBB.
	/// </summary>
	/// <override max-length="22" />
	stroke: string | nothing;
	/// <summary>
	/// The name of the symbol for this report.
	/// </summary>
	/// <override max-length="22" format="codified" />
	graphic: string | nothing;

	/// <summary>
	/// The number of days in advance to predict a <see cref="MaintenanceJob"/> will become pending.
	/// </summary>
	/// <override min-value="5" max-value="180" />
	predictionDays: uint | nothing;
	/// <summary>
	/// The number of days between service visits.
	/// </summary>
	recurDays: uint | nothing;
	/// <summary>
	/// The amount of mileage between service visits.
	/// </summary>
	recurDistance: double | nothing;
	/// <summary>
	/// The number of operating hours between service visits.
	/// </summary>
	recurEngineHours: double | nothing;
	/// <summary>
	/// The per-<see cref="Asset"/> details calculated by the system to help predict the creation of <see cref="MaintenanceJob"/>s.
	/// </summary>
	intervals: Map<ulong, MaintenanceInterval | nothing> | nothing;

	// ------------ repair details ------------
	/// <summary>
	/// The name of the garage or service facility where the work is done.
	/// </summary>
	/// <override max-length="100" />
	garage: string | nothing;
	/// <summary>
	/// The estimated time for the created <see cref="MaintenanceJob"/>.
	/// </summary>
	duration: TimeSpan | nothing;
	/// <summary>
	/// The estimated cost for the created <see cref="MaintenanceJob"/> cost in dollars.
	/// </summary>
	cost: double | nothing;
	/// <summary>
	/// A reference code used to track this created <see cref="MaintenanceJob"/>.
	/// </summary>
	/// <override max-length="100" />
	reference: string | nothing;
	
	constructor(json?: JsonObject) {
		super(json);
		this.id = json?.id as ulong;
		this.company = json?.company as ulong;
		this.name = json?.name as string ?? "";
		this.notes = json?.notes as string ?? "";
		this.targets = json?.targets as string;
		this.notify = json?.notify as email[];
		this.fill = json?.fill as colour;
		this.stroke = json?.stroke as colour;
		this.graphic = json?.graphic as codified;
		this.predictionDays = json?.predictionDays as uint;
		this.recurDays = json?.recurDays as uint;
		this.recurDistance = json?.recurDistance as double;
		this.recurEngineHours = json?.recurEngineHours as double;
		this.intervals = json?.intervals
			? serialization.toMapPredicate(json?.intervals as object, (k: string, v: any) => [utility.id(k), MaintenanceInterval.fromJSON(v)])
			: null;
		this.garage = json?.garage as string;
		this.duration = json?.duration
			? new TimeSpan(json?.duration as timespan)
			: null;
		this.cost = json?.cost as double;
		this.reference = json?.reference as string;
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
		if (this.targets) json.targets = this.targets;
		if (this.notify?.length) json.notify = [...this.notify];
		if (this.fill) json.fill = this.fill;
		if (this.stroke) json.stroke = this.stroke;
		if (this.graphic) json.graphic = this.graphic;
		if (utility.isntNaN(this.predictionDays)) json.predictionDays = this.predictionDays;
		if (utility.isntNaN(this.recurDays)) json.recurDays = this.recurDays;
		if (utility.isntNaN(this.recurDistance)) json.recurDistance = this.recurDistance;
		if (utility.isntNaN(this.recurEngineHours)) json.recurEngineHours = this.recurEngineHours;
		if (this.intervals?.size) json.intervals = serialization.fromMapPredicate(this.intervals, (k: number, v: MaintenanceInterval | nothing) => [k.toString(), v?.toJSON() ?? null]);
		if (this.garage) json.garage = this.garage;
		if (this.duration) json.duration = this.duration.toString();
		if (utility.isntNaN(this.cost)) json.cost = this.cost;
		if (this.reference) json.reference = this.reference;
		return json;
	}
}