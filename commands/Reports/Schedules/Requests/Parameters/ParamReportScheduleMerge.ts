import { nothing, ulong, utility } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
import { ParamReportOptions } from "../../../Parameters/ParamReportOptions";
import { ParamReportNotify } from "./ParamReportNotify";
import { ParamReportRecurrence } from "./ParamReportRecurrence";

/**
 * Parameters used to create or update an {@link ReportSchedule}.
 **/
export class ParamReportScheduleMerge extends ParamMergeSubscribable {
	/// <summary>
	/// The unique identifier of the <see cref="ReportSchedule"/> you want to update.
	/// Leave this as <c>null</c> when creating a new <see cref="ReportSchedule"/>.
	/// </summary>
	id: ulong | nothing;
	/// <summary>
	/// Identifier of the <see cref="ReportTemplate"/> used to help create results.
	/// </summary>
	template: ulong | nothing;
	/// <summary>
	/// Name for the <see cref="ReportSchedule"/>.
	/// </summary>
	name: string | nothing;
	/// <summary>
	/// Notes for the <see cref="ReportSchedule"/>.
	/// </summary>
	notes: string | nothing;
	/// <summary>
	/// The user which owns the schedule.
	/// When report results are created, they will be created with this user's <see cref="Asset"/> permissions.
	/// </summary>
	owner: string | nothing;
	/// <summary>
	/// Indicates whether this schedule is allowed to run.
	/// </summary>
	enabled: boolean | nothing;
	/// <summary>
	/// The recurring schedule to generate report results.
	/// </summary>
	repetition: ParamReportRecurrence | nothing;
	/// <summary>
	/// Specified parameters for the report logic, targeted <see cref="Asset"/>s, and filtering Places.
	/// </summary>
	options: ParamReportOptions | nothing;
	/// <summary>
	/// A list of users and a targeting expression for <see cref="Asset"/>s which receive report results notifications.
	/// </summary>
	notify: ParamReportNotify | nothing;
	
	constructor(json?: JsonObject) {
		super(json);
		this.id = json?.id as ulong;
		this.template = json?.template;
		this.name = json?.name as string;
		this.notes = json?.notes as string;
		this.owner = json?.owner;
		this.enabled = json?.enabled;
		this.repetition = ParamReportRecurrence.fromJSON(json?.repetition);
		this.options = ParamReportOptions.fromJSON(json?.options);
		this.notify = ParamReportNotify.fromJSON(json?.notify);
	}

	override toJSON(): any {
		const json: any = {};
		if (this.id) {
			json.id = this.id;
			json.v = [...this.v];
		} else {
			json.template = this.template;
		}
		if (this.name) json.name = this.name;
		if (this.notes) json.notes = this.notes;
		if (this.owner) json.owner = this.owner;
		if (!utility.isNothing(this.enabled)) json.enabled = !!this.enabled;
		if (!utility.isNothing(this.repetition)) json.repetition = this.repetition;
		if (!utility.isNothing(this.options)) json.options = this.options;
		if (!utility.isNothing(this.notify)) json.notify = this.notify;
		return json;
	}
}