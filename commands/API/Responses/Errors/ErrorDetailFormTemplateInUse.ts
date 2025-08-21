import { ErrorDetail } from "./ErrorDetail";

/**
 * Details for how many and which <see cref="FormResult"/>s are still using this <see cref="FormTemplate"/>.
 **/
export class ErrorDetailFormTemplateInUse extends ErrorDetail {
	/**
	 * A list of <see cref="FormResult.id"/>s currently being referenced.
	 **/
	formResults: ulong[];}