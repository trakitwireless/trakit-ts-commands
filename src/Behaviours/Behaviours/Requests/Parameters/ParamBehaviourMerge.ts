import { Behaviour, BehaviourParameter, byte, Company, JsonObject, nothing, serialization, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";

/**
 * Parameters used to create or update an {@link Behaviour}.
 */
export class ParamBehaviourMerge extends ParamMergeSubscribable {
	/**
	 * The unique identifier of the {@link Behaviour} you want to update.
	 * Leave this as `null` when creating a new {@link Behaviour}.
	 */
	id: ulong | nothing;
	/**
	 * The {@link BehaviourScript} this {@link Behaviour} implements.
	 */
	script: ulong | nothing;
	/**
	 * The {@link Company} to which this {@link Behaviour} belongs.
	 * After creation, this value is read-only.
	 */
	company: ulong | nothing;
	/**
	 * Name for the {@link Behaviour}.
	 */
	name: string | nothing;
	/**
	 * Notes for the {@link Behaviour}.
	 */
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
		this.id = json?.id as ulong;
		this.company = json?.company as ulong;
		this.name = json?.name as string;
		this.notes = json?.notes as string;
		this.script = json?.script as ulong;
		this.priority = json?.priority as byte;
		this.targets = json?.targets as string;
		this.filters = json?.filters as string;
		this.parameters = json?.parameters
			? serialization.toMapPredicate(json?.parameters as object, (key, value) => [key, value ? BehaviourParameter.fromJSON(value) : null])
			: null;
	}

	override toJSON(): JsonObject {
		const json: JsonObject = {};
		if (this.id) {
			json.id = this.id;
			json.v = [...this.v];
		} else {
			json.script = this.script as ulong;
			json.company = this.company as ulong;
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