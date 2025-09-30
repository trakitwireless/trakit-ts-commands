import { BehaviourParameter, codified, colour, JsonObject, nothing, serialization, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";

/**
 * Parameters used to create or update an {@link BehaviourScript}.
 **/
export class ParamBehaviourScriptMerge extends ParamMergeSubscribable {
	/**
	 * The unique identifier of the {@link BehaviourScript} you want to update.
	 * Leave this as `null` when creating a new {@link BehaviourScript}.
	 **/
	id: ulong | nothing;
	/**
	 * The {@link Company} to which this {@link BehaviourScript} belongs.
	 * After creation, this value is read-only.
	 **/
	company: ulong | nothing;
	/**
	 * Name for the {@link BehaviourScript}.
	 **/
	name: string | nothing;
	/**
	 * Notes for the {@link BehaviourScript}.
	 **/
	notes: string | nothing;
	/**
	 * The name of the symbol shown in the UI.
	 */
	graphic: string | nothing;
	/**
	 * Background and fill colour in the UI.
	 */
	fill: string | nothing;
	/**
	 * Text and outline colour in the UI.
	 */
	stroke: string | nothing;
	/**
	 * Source code of the {@link BehaviourScript}.
	 */
	source: string | nothing;
	/**
	 * When set to true, this {@link Company} as well as all child companies will be able to implement this {@link BehaviourScript} for that companies assets.
	 */
	global: boolean | nothing;
	/**
	 * A search pattern used to select the providers.
	 */
	filters: string | nothing;
	/**
	 * The defined arguments for this {@link BehaviourScript}.
	 * Each key in the object is the name of an argument.
	 */
	parameters: Map<string, BehaviourParameter | nothing> | nothing;

	constructor(json?: JsonObject) {
		super(json);
		this.id = json?.id as ulong;
		this.company = json?.company as ulong;
		this.name = json?.name as string;
		this.notes = json?.notes as string;
		this.graphic = json?.graphic as codified;
		this.fill = json?.fill as colour;
		this.stroke = json?.stroke as colour;
		this.source = json?.source as string;
		this.global  = json?.global as boolean;
		this.filters = json?.filters as string;
		this.parameters = json?.parameters
			? serialization.toMapPredicate(json?.parameters as object, (key, value) => [key, value ? BehaviourParameter.fromJSON(value) : null])
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
		if (this.graphic) json.graphic = this.graphic;
		if (this.fill) json.fill = this.fill;
		if (this.stroke) json.stroke = this.stroke;
		if (this.source) json.source = this.source;
		if (this.global) json.global = this.global;
		if (this.filters) json.filters = this.filters;
		if (this.parameters?.size) json.parameters = serialization.fromMapPredicate(this.parameters, (key, value) => [key, value?.toJSON() ?? null]);
		return json;
	}
}