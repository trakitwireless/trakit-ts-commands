import { JsonObject } from "@trakit/objects";
import { ErrorDetailInput } from "./ErrorDetailInput";
import { ErrorDetailType } from "./ErrorDetailType";

/**
 * These are the details of an enum input that failed to parse.
 **/
export class ErrorDetailEnum extends ErrorDetailInput {
	override get kind() { return ErrorDetailType.enum; }
	/**
	 * This is a list of possible values the input should have been.
	 **/
	valid: string[];

	constructor(json: JsonObject) {
		super(json);
		this.valid = json?.valid as string[] ?? [];
	}
}