import { codified, colour, JsonObject, nothing, ReportType, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
import { ParamReportOptions } from "../../../Parameters/ParamReportOptions";

/**
 * Parameters used to create or update an {@link ReportTemplate}.
 */
export class ParamReportTemplateMerge extends ParamMergeSubscribable {
	/// <summary>
	/// The unique identifier of the <see cref="ReportTemplate"/> you want to update.
	/// Leave this as <c>null</c> when creating a new <see cref="ReportTemplate"/>.
	/// </summary>
	id: ulong | nothing;
	/// <summary>
	/// The <see cref="Company"/> to which this <see cref="ReportTemplate"/> belongs.
	/// After creation, this value is read-only.
	/// </summary>
	company: ulong | nothing;
	/// <summary>
	/// Name for the <see cref="ReportTemplate"/>.
	/// </summary>
	name: string | nothing;
	/// <summary>
	/// Notes for the <see cref="ReportTemplate"/>.
	/// </summary>
	notes: string | nothing;
	/// <summary>
	/// The kind of logic used to build the report results.
	/// </summary>
	kind: ReportType | nothing;
	/// <summary>
	/// Specified parameters for the report logic, targeted <see cref="Asset"/>s, and filtering <see cref="Place"/>s and/or regions.
	/// </summary>
	options: ParamReportOptions | nothing;
	/// <summary>
	/// Background and fill colour in the UI.
	/// </summary>
	fill: string | nothing;
	/// <summary>
	/// Text and outline colour in the UI.
	/// </summary>
	stroke: string | nothing;
	/// <summary>
	/// The name of the symbol shown in the UI.
	/// </summary>
	graphic: string | nothing;
	
	constructor(json?: JsonObject) {
		super(json);
		this.id = json?.id as ulong;
		this.company = json?.company as ulong;
		this.name = json?.name as string;
		this.notes = json?.notes as string;
		this.kind = json?.kind as ReportType;
		this.options = json?.options
			? ParamReportOptions.fromJSON(json.options as JsonObject)
			: null;
		this.fill = json?.fill as colour;
		this.stroke = json?.stroke as colour;
		this.graphic = json?.graphic as codified;
	}

	override toJSON(): any {
		const json: any = {}
		if (this.id) {
			json.id = this.id;
			json.v = [...this.v];
		} else {
			json.company = this.company;
		}
		if (this.name) json.name = this.name;
		if (this.notes) json.notes = this.notes;
		if (this.kind) json.kind = this.kind;
		if (this.options) json.options = this.options.toJSON();
		if (this.fill) json.fill = this.fill;
		if (this.stroke) json.stroke = this.stroke;
		if (this.graphic) json.graphic = this.graphic;
		return json;
	}
}