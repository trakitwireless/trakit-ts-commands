import { DispatchStepStatus, JsonObject, nothing, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";

/**
 * Parameter values for changing the status of a {@link DispatchStep} in a {@link DispatchJob}.
 */
export class ParamDispatchStepChange extends ParamMergeSubscribable {
	/**
	 * The identifier of the step.
	 * Identifiers are unique to a {@link DispatchJob}, but are not unique system-wide.
	 */
	id: ulong;
	/**
	 * Notes about the status of the work.
	 */
	notes: string | nothing;
	/**
	 * The name of the person who signed the {@link DispatchStep}'s completion.
	 */
	signatory: string | nothing;
	/**
	 * Update to the {@link DispatchStepState} of the {@link DispatchStep}.
	 * However, the {@link DispatchStepState.latlng} is set to `null`.
	 */
	status: DispatchStepStatus | nothing;

	constructor(json?: JsonObject) {
		super(json);
		this.id = json?.id as ulong;
		this.notes = json?.notes as string;
		this.signatory = json?.signatory as string;
		this.status = json?.status as DispatchStepStatus;
	}
	override toJSON(): JsonObject {
		const json: JsonObject = {
			id: this.id,
		};
		if (this.notes) json.notes = this.notes;
		if (this.signatory) json.signatory = this.signatory;
		if (this.status) json.status = this.status;
		return json;
	}
}