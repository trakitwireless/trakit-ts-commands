import { nothing } from "@trakit/objects";

/**
 * Interface for requests that filter by date.
 **/
export interface IPayListByDate {
	/**
	 * The start date for the filter.
	 **/
	after: Date | nothing;
	/**
	 * The end date for the filter.
	 **/
	before: Date | nothing;
}