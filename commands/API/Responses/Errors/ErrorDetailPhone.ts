import { ErrorDetailInput } from "./ErrorDetailInput";

/**
 * These are the details of a phone number input that failed to parse.
 **/
export class ErrorDetailPhone extends ErrorDetailInput {
	/**
	 * The number that was parsed from the input.
	 **/
	number: ulong;
	/**
	 * The digital characters used to try to parse the number.
	 **/
	usable: string;}