import { nothing } from "@trakit/objects";

/**
 * Interface for requests on a list of objects by key.
 **/
export interface IPayListByKey {
	/**
	 * The first key to filter the list by.
	 **/
	first: string | nothing;
	/**
	 * The last key to filter the list by.
	 **/
	last: string | nothing;
}