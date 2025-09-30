import { nothing, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
import { ParamFormField } from "./ParamFormField";

/**
 * Parameters used to create or update an {@link FormTemplate}.
 **/
export class ParamFormTemplateMerge extends ParamMergeSubscribable {
	/// <summary>
	/// The unique identifier of the <see cref="FormTemplate"/> you want to update.
	/// </summary>
	id: ulong | nothing;
	/// <summary>
	/// The <see cref="Company"/> to which this <see cref="FormTemplate"/> belongs.
	/// After creation, this value is read-only.
	/// </summary>
	company: ulong | nothing;
	/// <summary>
	/// Name for the <see cref="FormTemplate"/>.
	/// </summary>
	name: string | nothing;
	/// <summary>
	/// Notes for the <see cref="FormTemplate"/>.
	/// </summary>
	notes: string | nothing;
	/// <summary>
	/// Codified label names used to relate forms to <see cref="Asset"/>s.
	/// </summary>
	labels: codified[] | nothing;
	/// <summary>
	/// A collection of all the <see cref="FormTemplate.fields"/>.
	/// Any field not given in the collection will be removed.
	/// </summary>
	fields: ParamFormField[] | nothing;
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
		this.labels = json?.labels as codified[];
		this.fields = (json?.fields as JsonObject[])?.map((f: any) => new ParamFormField(f));
		this.fill = json?.fill as colour;
		this.stroke = json?.stroke as colour;
		this.graphic = json?.graphic as codified;
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
		if (this.labels?.length) json.labels = [...this.labels];
		if (this.fields?.length) json.fields = this.fields.map(f => f.toJSON());
		if (this.fill) json.fill = this.fill;
		if (this.stroke) json.stroke = this.stroke;
		if (this.graphic) json.graphic = this.graphic;
		return json;
	}
}