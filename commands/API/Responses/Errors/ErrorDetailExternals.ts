import { JsonObject } from "@trakit/objects";
import { ErrorDetail } from "./ErrorDetail";
import { ErrorDetailType } from "./ErrorDetailType";

/**
 * These are the errors/warnings taken from the output of some other system.
 **/
export class ErrorDetailExternals extends ErrorDetail {
	override get kind() { return ErrorDetailType.externals; }
	/**
	 * List of errors.
	 **/
	errors: string[];
	/**
	 * List of warnings.
	 **/
	warnings: string[];
	/**
	 * List of messages.
	 **/
	messages: string[];

	constructor(json: JsonObject) {
		super();
		this.errors = json?.errors as string[] ?? [];
		this.warnings = json?.warnings as string[] ?? [];
		this.messages = json?.messages as string[] ?? [];
	}
}