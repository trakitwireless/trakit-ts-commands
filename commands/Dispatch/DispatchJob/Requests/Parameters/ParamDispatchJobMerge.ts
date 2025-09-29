import { DispatchJobPriority, nothing, serialization, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
import { ParamDispatchStepMerge } from "./ParamDispatchStepMerge";

/**
 * Parameters used to create a new, or update an existing {@link DispatchJob}.
 **/
export class ParamDispatchJobMerge extends ParamMergeSubscribable {
	/**
	 * The unique identifier of the {@link DispatchJob} you want to update.
	 **/
	id: ulong | nothing;
	/**
	 * The identifier of the {@link Company} to which the {@link DispatchJob} belongs.
	 * After creation, this value is read-only.
	 **/
	company: ulong | nothing;
	/**
	 * The identifier of the {@link Asset} assigned to the {@link DispatchJob}.
	 **/
	asset: ulong | nothing;
	/**
	 * Name for the {@link DispatchJob}.
	 **/
	name: string | nothing;
	/**
	 * Instructions for the driver to help them complete the {@link DispatchJob}.
	 * Such as which door to use, a buzz code to enter the facility, etc...
	 **/
	instructions: string | nothing;
	/**
	 * A custom field used to refer the {@link DispatchJob} to an external system. Examples are a work order, pick-up, waybill, etc...
	 * If value is null, the field is removed from the {@link DispatchJob}.
	 * If a new value or null is not provided for a current attribute, no change is made.
	 **/
	references: Map<string, string | nothing> | nothing;
	/**
	 * A list of {@link Document} identifiers to attach to the {@link DispatchJob}.
	 **/
	attachments: ulong[] | nothing;
	/**
	 * A list of {@link FormResult} identifiers to attach to the {@link DispatchJob}.
	 **/
	forms: ulong[] | nothing;
	/**
	 * The importance of the {@link DispatchJob} when scheduling for an asset.
	 **/
	priority: DispatchJobPriority | nothing;
	/**
	 * A list of codified {@link CompanyLabels.labels|label} names used to relate (unassigned) {@link DispatchJob}s to {@link Asset}s.
	 **/
	labels: string[] | nothing;
	/**
	 * A list of coordinates to visit in order to carry out the work for the {@link DispatchJob}.
	 **/
	steps: ParamDispatchStepMerge[] | nothing;

	constructor(json?: JsonObject) {
		super(json);
		this.id = json?.id;
		this.company = json?.company;
		this.asset = json?.asset;
		this.name = json?.name;
		this.instructions = json?.instructions;
		if (json?.references) this.references = serialization.toMap(json.references);
		this.attachments = json?.attachments;
		this.forms = json?.forms;
		this.priority = json?.priority;
		this.labels = json?.labels;
		this.steps = json?.steps?.map((item: any) => new ParamDispatchStepMerge(item));
	}

	override toJSON(): any {
		const json: JsonObject = {};
		if (this.id) {
			json.id = this.id;
			json.v = [...this.v];
		} else {
			json.company = this.company;
		}
		if (!isNaN(this.asset as number)) json.asset = this.asset;	// works for numbers and null
		if (this.name) json.name = this.name;
		if (this.instructions) json.instructions = this.instructions;
		if (this.references?.size) json.references = serialization.fromMap(this.references);
		if (this.attachments) json.attachments = this.attachments;
		if (this.forms) json.forms = this.forms;
		if (this.priority) json.priority = this.priority;
		if (this.labels) json.labels = [...this.labels];
		if (this.steps?.length) json.steps = this.steps.map((item) => item.toJSON());
		return json;
	}
}