import { nothing, ProviderScriptBlock, ProviderScriptParameter, ProviderType, serialization, ulong, utility } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";

/**
 * Parameters used to create or update an {@link ProviderScript}.
 **/
export class ParamProviderScriptMerge extends ParamMergeSubscribable {
	/// <summary>
	/// The unique identifier of the <see cref="ProviderScript"/> you want to update.
	/// Leave this as <c>null</c> when creating a new <see cref="ProviderScript"/>.
	/// </summary>
	id: ulong | nothing;
	/// <summary>
	/// The <see cref="Company"/> to which this <see cref="ProviderScript"/> belongs.
	/// After creation, this value is read-only.
	/// </summary>
	company: ulong | nothing;
	/// <summary>
	/// Name for the <see cref="ProviderScript"/>.
	/// </summary>
	name: string | nothing;
	/// <summary>
	/// Notes for the <see cref="ProviderScript"/>.
	/// </summary>
	notes: string | nothing;
	/// <summary>
	/// Indicates whether this <see cref="ProviderScript"/> is available to child companies.
	/// </summary>
	global: boolean | nothing;
	/// <summary>
	/// The type of provider for which this <see cref="ProviderScript"/> can be used.
	/// Limiting to a specific model from a manufacturer is accomplished through the block conditions.
	/// </summary>
	kind: ProviderType | nothing;
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
	/// <summary>
	/// Blocks of file data which are (optionally) included in the <see cref="ProviderScript"/> data file.
	/// </summary>
	blocks: ProviderScriptBlock[] | nothing;
	/// <summary>
	/// Parameter definitions for this <see cref="ProviderScript"/>, including type-hints and default values.
	/// </summary>
	parameters: Map<string, ProviderScriptParameter | nothing> | nothing;
	
	constructor(json: any) {
		super(json);
		this.id = json?.id;
		this.company = json?.company;
		this.name = json?.name;
		this.notes = json?.notes;
		this.global = json?.global;
		this.kind = json?.kind;
		this.fill = json?.fill;
		this.stroke = json?.stroke;
		this.graphic = json?.graphic;
		this.blocks = json?.blocks?.map((e: any) => new ProviderScriptBlock(e));
		this.parameters = json?.parameters
			? serialization.toMapPredicate(json.parameters, (key, value) => [key, value ? ProviderScriptParameter.fromJSON(value) : null])
			: null;
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
		if (!utility.isNothing(this.global)) json.global = this.global;
		if (this.kind) json.kind = this.kind;
		if (this.fill) json.fill = this.fill;
		if (this.stroke) json.stroke = this.stroke;
		if (this.graphic) json.graphic = this.graphic;
		if (this.blocks?.length) json.blocks = this.blocks?.map((e) => e.toJSON());
		if (this.parameters?.size) json.parameters = serialization.fromMapPredicate(this.parameters, (key, value) => [key, value ? value.toJSON() : null]);
		return json;
	}
}