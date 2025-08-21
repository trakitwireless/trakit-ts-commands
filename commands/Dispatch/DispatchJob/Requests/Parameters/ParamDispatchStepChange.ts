import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";

/**
 * Parameter values for changing the status of a {@link DispatchStep} in a {@link DispatchJob}.
 **/
export class ParamDispatchStepChange extends ParamMergeSubscribable {
	/**
	 * The identifier of the step.
	 * Identifiers are unique to a {@link DispatchJob}, but are not unique system-wide.
	 **/
	id: ulong;
	/**
	 * Notes about the status of the work.
	 **/
	notes: string;
	/**
	 * The name of the person who signed the {@link DispatchStep}'s completion.
	 **/
	signatory: string;
	/**
	 * Update to the {@link DispatchStepState} of the {@link DispatchStep}.
	 * However, the {@link DispatchStepState.latlng} is set to `null`.
	 **/
	status: DispatchStepStatus | undefined;}