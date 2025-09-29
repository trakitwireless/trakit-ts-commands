import { ReportRecurrenceType, byte, nothing, utility } from "@trakit/objects";
import { ParamMerge } from "../../../../API/Requests/Parameters/ParamMerge";

/**
 * Parameters used to create or update an {@link ReportSchedule}.
 **/
export class ParamReportRecurrence extends ParamMerge {
	/**
	 * Creates a new instance of ParamReportRecurrence from JSON.
	 * @param json The JSON to parse.
	 * @returns A new instance of ParamReportRecurrence or null.
	 */
	static fromJSON(json?: JsonObject): ParamReportRecurrence | nothing {
		return json
			? new ParamReportRecurrence(json)
			: null;
	}

	/// <summary>
	/// How often the report is automatically run.  Daily, weekly, monthly, etc...
	/// </summary>	
	kind: ReportRecurrenceType | nothing;
	/// <summary>
	/// Used only for daily schedules, this 7 item, boolean array, determines if the <see cref="ReportSchedule"/> should recur on that day of the week.
	/// </summary>
	weekdays: boolean[] | nothing;
	/// <summary>
	/// Used only for weekly schedules, it's a number between 0 and 6 representing the day of the week, with Sunday being the first day of the week.
	/// </summary>
	weekday: byte | nothing;
	/// <summary>
	/// When the <see cref="ReportSchedule"/> is to begin recurring in local-time (not UTC).
	/// </summary>
	start: Date | nothing;
	/// <summary>
	/// The optional time when the <see cref="ReportSchedule"/> stops recurring in local-time (not UTC).
	/// </summary>
	end: Date | nothing;
	
	constructor(json?: JsonObject) {
		super();
		this.kind = json?.kind;
		this.weekdays = json?.weekdays;
		this.weekday = json?.weekday;
		this.start = json?.start
			? utility.date(json.start)
			: null;
		this.end = json?.end
			? utility.date(json.end)
			: null;
	}

	override toJSON(): any {
		const json: JsonObject = {};
		if (this.kind) json.kind = this.kind;
		if (this.weekdays?.length) json.weekdays = [...this.weekdays];
		if (this.weekday) json.weekday = this.weekday;
		if (this.start) json.start = this.start.toISOString();
		if (!isNaN(this.end?.valueOf() as number)) json.end = this.end?.toISOString() ?? null;
		return json;
	}
}