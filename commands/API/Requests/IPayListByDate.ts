
/**
 * Interface for requests that filter by date.
 **/
export interface IPayListByDate {
	/**
	 * The start date for the filter.
	 **/
	after: Date | undefined;
	/**
	 * The end date for the filter.
	 **/
	before: Date | undefined;
}