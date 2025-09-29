import { Behaviour, BehaviourParameter, byte, Company, nothing, Picture, serialization, ulong, utility } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";

/**
 * Parameters used to create or update an {@link Behaviour}.
 **/
export class ParamBehaviourMerge extends ParamMergeSubscribable {
	/**
	 * The unique identifier of the {@link Behaviour} you want to update.
	 * Leave this as `null` when creating a new {@link Behaviour}.
	 **/
	id: ulong | nothing;
	/**
	 * The {@link BehaviourScript} this {@link Behaviour} implements.
	 **/
	script: ulong | nothing;
	/**
	 * The {@link Company} to which this {@link Behaviour} belongs.
	 * After creation, this value is read-only.
	 **/
	company: ulong | nothing;
	/**
	 * Name for the {@link Behaviour}.
	 **/
	name: string | nothing;
	/**
	 * Notes for the {@link Behaviour}.
	 **/
	notes: string | nothing;

	/**
	 * The order in which this {@link Behaviour} is executed.
	 */
	priority: byte | nothing;
	/**
	 * A search pattern used to select the assets which will embed this {@link Behaviour} in their execution context.
	 */
	targets: string | nothing;
	/**
	 * A search pattern used to select the providers which can implement this {@link Behaviour}.
	 */
	filters: string | nothing;
	/**
	 * The values needed to implement the script.  Each key in this object is the name of a required script argument.
	 */
	parameters: Map<string, BehaviourParameter | nothing> | nothing;

	constructor(json?: JsonObject) {
		super(json);
		this.id = json?.id;
		this.company = json?.company;
		this.name = json?.name;
		this.notes = json?.notes;
		this.script = json?.script;
		this.priority = json?.priority;
		this.targets = json?.targets;
		this.filters = json?.filters;
		this.parameters = json?.parameters
			? serialization.toMapPredicate(json.parameters, (key, value) => [key, value ? BehaviourParameter.fromJSON(value) : null])
			: null;
	}

	override toJSON(): any {
		const json: JsonObject = {};
		if (this.id) {
			json.id = this.id;
			json.v = [...this.v];
		} else {
			json.script = this.script;
			json.company = this.company;
		}
		if (this.name) json.name = this.name;
		if (this.notes) json.notes = this.notes;
		if (this.priority) json.priority = this.priority;
		if (this.targets) json.targets = this.targets;
		if (this.filters) json.filters = this.filters;
		if (this.parameters) json.parameters = serialization.fromMapPredicate(this.parameters, (key, value) => [key, value?.toJSON() ?? null]);
		return json;
	}
}