import { Base } from "@objects/API/Base";

/**
 * Interface for responses that return a list or loaded objects.
 **/
export interface IRepTComponent<TBase extends Base> {
	/**
	 * The collection of objects.
	 **/
	getCollection(): TBase[];
}