import { ErrorDetail } from "./ErrorDetail";
import { ErrorDetailType } from "./ErrorDetailType";

/**
 * These are the details of an input or format exception.
 **/
export class ErrorDetailInput extends ErrorDetail {
	override get kind() { return ErrorDetailType.input; }
	/**
	 * The given input which caused the error.
	 **/
	input: string;

	constructor(json: JsonObject) {
		super();
		this.input = json?.input ?? "";
	}
}