
/**
 * Interface for requests that filter lists by ID range.
 **/
export interface IPayListById {
	/**
	 * The ID range to filter by.
	 **/
	lowest: ulong | undefined;
	/**
	 * The highest ID in the range.
	 **/
	highest: ulong | undefined;
}}