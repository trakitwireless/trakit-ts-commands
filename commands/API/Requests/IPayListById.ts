import { nothing, ulong } from "@trakit/objects";

/**
 * Interface for requests that filter lists by ID range.
 **/
export interface IPayListById {
	/**
	 * The ID range to filter by.
	 **/
	lowest: ulong | nothing;
	/**
	 * The highest ID in the range.
	 **/
	highest: ulong | nothing;
}