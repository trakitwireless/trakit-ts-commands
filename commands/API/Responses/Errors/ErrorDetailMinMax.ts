import { double } from "@trakit/objects";
import { ErrorDetailType } from "./ErrorDetailType";
import { ErrorDetail } from "./ErrorDetail";

/**
 * These are the details of when a value needed to be within a certain range, and was not.
 **/
export class ErrorDetailMinMax extends ErrorDetail {
	override get kind() { return ErrorDetailType.minMax; }
	/**
	 * Minimum possible value.
	 **/
	min: Date | double | undefined;
	/**
	 * Maximum possible value.
	 **/
	max: Date | double | undefined;
}