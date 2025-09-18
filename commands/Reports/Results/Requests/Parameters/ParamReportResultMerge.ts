import { nothing, ReportType, Timezone, ulong, utility } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
import { ParamReportOptions } from "commands/Reports/Parameters/ParamReportOptions";

/**
 * Parameters used to create or update an {@link ReportResult}.
 **/
export class ParamReportResultMerge extends ParamMergeSubscribable {
	/// <summary>
	/// The unique identifier of the <see cref="ReportResult"/> you want to update.
	/// Leave this as <c>null</c> when creating a new <see cref="ReportResult"/>.
	/// </summary>
	id: ulong | nothing;
	/// <summary>
	/// Identifier of the <see cref="ReportTemplate"/> used to help create these <see cref="ReportResult"/>.
	/// </summary>
	template: ulong | nothing;
	/// <summary>
	/// The <see cref="Company"/> to which these report <see cref="ReportResult"/> belongs.
	/// </summary>
	company: ulong | nothing;
	/// <summary>
	/// The kind of logic used to build the report <see cref="ReportResult"/>.
	/// </summary>
	kind: ReportType | nothing;
	/// <summary>
	/// Name for the report <see cref="ReportResult"/>.
	/// </summary>
	name: string | nothing;
	/// <summary>
	/// Notes for these report <see cref="ReportResult"/>.
	/// </summary>
	notes: string | nothing;
	/// <summary>
	/// Indicates whether this report should be archived.
	/// Archived report <see cref="ReportResult"/> are stored for six months.
	/// Non-archive reports are purged after 24 hours.
	/// </summary>
	archive: boolean | nothing;
	/// <summary>
	/// Specified parameters for the report logic, targeted <see cref="Asset"/>s, and filtering <see cref="Place"/>s and/or regions.
	/// </summary>
	options: ParamReportOptions | nothing;
	/// <summary>
	/// The <see cref="Timezone.code"/> of the local timezone used to calculate times.
	/// </summary>
	/// <seealso cref="Timezone.code" />
	timezone: Timezone | nothing;
	
	constructor(json: any) {
		super(json);
		this.id = json?.id;
		this.template = json?.template;
		this.company = json?.company;
		this.kind = json?.kind;
		this.name = json?.name;
		this.notes = json?.notes;
		this.archive = json?.archive;
		this.options = ParamReportOptions.fromJSON(json?.options);
		this.timezone = json?.timezone;
	}

	override toJSON(): any {
		const json: any = {};
		if (this.id) {
			json.id = this.id;
			json.v = [...this.v];
		} else {
			json.template = this.template;
			json.company = this.company;
		}
		if (this.kind) json.kind = this.kind;
		if (this.name) json.name = this.name;
		if (this.notes) json.notes = this.notes;
		if (!utility.isNothing(this.archive)) json.archive = this.archive;
		if (this.options) json.options = this.options.toJSON();
		if (this.timezone) json.timezone = this.timezone.code;
		return json;
	}
}