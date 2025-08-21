import { ErrorDetail } from "./ErrorDetail";

/**
 * These are the details of an exception while trying to parse the JSON input.
 **/
export class ErrorDetailParse extends ErrorDetail {
	/**
	 * The line number in the input string.
	 **/
	line: int;
	/**
	 * The character on which the failure occurred.
	 **/
	column: int;
	/**
	 * The last sucessfully parsed object.
	 **/
	after: string;}