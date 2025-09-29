import { int, nothing } from "@trakit/objects";
import { ErrorDetail } from "./ErrorDetail";
import { ErrorDetailType } from "./ErrorDetailType";

/**
 * These are the details of an exception while trying to parse the JSON input.
 **/
export class ErrorDetailParse extends ErrorDetail {
	override get kind() { return ErrorDetailType.parse; }
	/**
	 * The line number in the input string.
	 **/
	line: int | nothing;
	/**
	 * The character on which the failure occurred.
	 **/
	column: int | nothing;
	/**
	 * The last sucessfully parsed object.
	 **/
	after: string | nothing;

	constructor(json: JsonObject) {
		super();
		this.line = json?.line;
		this.column = json?.column;
		this.after = json?.after;
	}
}