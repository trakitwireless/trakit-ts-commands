
/**
 * Interface for requests that can include deleted objects.
 */
export interface IPayDeletable {
	/**
	 * When true, the command will also return deleted objects.
	 */
	includeDeleted: boolean;
}