import { ErrorDetail } from "./ErrorDetail";

/**
 * Details for how many and which {@link FormResult}s are still using this {@link FormTemplate}.
 **/
export class ErrorDetailFormTemplateInUse extends ErrorDetail {
	/**
	 * A list of {@link FormResult.id}s currently being referenced.
	 **/
	formResults: ulong[];}