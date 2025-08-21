import { ErrorDetailMinMax } from "./ErrorDetailMinMax";

/**
 * These are the details of when a value needed to be within a certain range, and was not.
 **/
export class ErrorDetailMinMax<T> extends ErrorDetail where T : struct {
	/**
	 * Minimum possible value.
	 **/
	min: T | undefined;
	/**
	 * Maximum possible value.
	 **/
	max: T | undefined;
	}

/**
 * These are the details of when a value needed to be within a certain range, and was not.
 **/
export class ErrorDetailMinMax extends ErrorDetailMinMax<double> {}