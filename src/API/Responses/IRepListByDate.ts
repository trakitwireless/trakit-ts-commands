import { nothing } from "@trakit/objects";
import { IRepListById } from "./IRepListById";

/**
 * Interface for responses that return a list of objects by date.
 */
export interface IRepListByDate extends IRepListById {
	/**
	 * The date to start the list from.
	 */
	after: Date | nothing;
	/**
	 * The date to end the list at.
	 */
	before: Date | nothing;
}