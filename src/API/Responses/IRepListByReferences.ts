import { nothing } from '@trakit/objects';

/**
 * Interface for responses that return a list by references.
 */
export interface IRepListByReferences {
	/**
	 * The references to filter the list by.
	 */
	references: Map<string, string> | nothing;
}