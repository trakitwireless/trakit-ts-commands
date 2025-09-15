import { nothing } from "@trakit/objects";

/**
 * Interface for responses that return a list of objects by date.
 **/
export interface IRepListByDate {
	/**
	 * The date to start the list from.
	 **/
	after: Date | nothing;
	/**
	 * The date to end the list at.
	 **/
	before: Date | nothing;
}