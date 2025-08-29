import { int } from "@trakit/objects";
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
	line!: int;
	/**
	 * The character on which the failure occurred.
	 **/
	column!: int;
	/**
	 * The last sucessfully parsed object.
	 **/
	after!: string;
}