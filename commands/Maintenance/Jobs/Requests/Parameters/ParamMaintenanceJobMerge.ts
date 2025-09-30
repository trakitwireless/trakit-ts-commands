import { datetime, JsonObject, timespan } from "@trakit/objects";
import { nothing, TimeSpan, ulong, utility } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
import { MaintenanceJobStatus } from "@trakit/objects";
import { double } from "@trakit/objects";

/**
 * Parameters used to create or update an {@link MaintenanceJob}.
 **/
export class ParamMaintenanceJobMerge extends ParamMergeSubscribable {
	/**
	 * The unique identifier of the {@link MaintenanceJob} you want to update.
	 * Leave this as `null` when creating a new {@link MaintenanceJob}.
	 **/
	id: ulong | undefined;
	/// <summary>
	/// The identifier of the <see cref="Asset"/> to which this <see cref="MaintenanceJob"/> is assigned.
	/// </summary>
	/// <override required="create" />
	asset: ulong | nothing;
	/// <summary>
	/// The <see cref="MaintenanceSchedule"/> from which this job was created
	/// </summary>
	/// <seealso cref="MaintenanceSchedule.id" />
	schedule: ulong | nothing;
	/// <summary>
	/// The work being done. Like "oil change".
	/// </summary>
	/// <override required="create" max-length="100" />
	name: string | nothing;
	/// <summary>
	/// Notes about the <see cref="MaintenanceJob"/>.  Like "changed the oil and filter".
	/// </summary>
	notes: string | nothing;
	/// <summary>
	/// The status of this <see cref="MaintenanceJob"/>.
	/// </summary>
	status: MaintenanceJobStatus | nothing;
	/// <summary>
	/// When was this <see cref="MaintenanceJob"/> created.
	/// </summary>
	/// <override value="current time" />
	created: Date | nothing;
	/// <summary>
	/// When was this <see cref="MaintenanceJob"/> created.
	/// </summary>
	completed: Date | nothing;
	/// <summary>
	/// The odometer at the time of the service.
	/// </summary>
	odometer: double | nothing;
	/// <summary>
	/// The operating time at the time of the service.
	/// </summary>
	engineHours: double | nothing;

	// ------------ repair details ------------
	/// <summary>
	/// The name of the garage or service facility where the work is done.
	/// </summary>
	/// <override max-length="100" />
	garage: string | nothing;
	/// <summary>
	/// Time it took to complete the <see cref="MaintenanceJob"/>.
	/// </summary>
	duration: TimeSpan | nothing;
	/// <summary>
	/// How much the <see cref="MaintenanceJob"/> cost in dollars.
	/// </summary>
	cost: double | nothing;
	/// <summary>
	/// A reference code used to track this <see cref="MaintenanceJob"/>.
	/// </summary>
	/// <override max-length="100" />
	reference: string | nothing;
	/// <summary>
	/// The mechanic who performed the work.
	/// </summary>
	/// <override max-length="100" />
	technician: string | nothing;
	/// <summary>
	/// <see cref="Picture"/>s taken while performing the work for reference.
	/// </summary>
	/// <override>
	/// <values>
	/// <seealso cref="Picture.id" />
	/// </values>
	/// </override>
	pictures: ulong[] | nothing;
	
	constructor(json?: JsonObject) {
		super(json);
		this.id = json?.id as ulong;
		this.asset = json?.asset as ulong;
		this.schedule = json?.schedule as ulong;
		this.name = json?.name as string;
		this.notes = json?.notes as string;
		this.status = json?.status as MaintenanceJobStatus;
		this.created = json?.created
			? utility.date(json.created as datetime)
			: null;
		this.completed = json?.completed
			? utility.date(json.completed as datetime)
			: null;
		this.odometer = json?.odometer as double;
		this.engineHours = json?.engineHours as double;
		this.garage = json?.garage as string;
		this.duration = json?.duration
			? new TimeSpan(json.duration as timespan)
			: null;
		this.cost = json?.cost as double;
		this.reference = json?.reference as string;
		this.technician = json?.technician as string;
		this.pictures = (json?.pictures as JsonObject[])?.map((v: any) => utility.id(v));
	}

	override toJSON(): any {
		const json: any = {}
		if (this.id) {
			json.id = this.id;
			json.v = [...this.v];
		} else {
			json.asset = this.asset;
		}
		if (this.schedule) json.schedule = this.schedule;
		if (this.name) json.name = this.name;
		if (this.notes) json.notes = this.notes;
		if (this.status) json.status = this.status;
		if (this.created) json.created = this.created.toISOString();
		if (this.completed) json.completed = this.completed.toISOString();
		if (this.odometer) json.odometer = this.odometer;
		if (this.engineHours) json.engineHours = this.engineHours;
		if (this.garage) json.garage = this.garage;
		if (this.duration) json.duration = this.duration.toString();
		if (this.cost) json.cost = this.cost;
		if (this.reference) json.reference = this.reference;
		if (this.technician) json.technician = this.technician;
		if (this.pictures?.length) json.pictures = [...this.pictures];
		return json;
	}
}