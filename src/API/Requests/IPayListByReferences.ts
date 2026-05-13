import { nothing } from "@trakit/objects";

/**
 * Interface for requests on a list of objects by references.
 */
export interface IPayListByReferences {
	/**
	 * The references to filter the list by.
	 */
	references: Map<string, string>;
}