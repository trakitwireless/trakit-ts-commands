import { Base } from '@trakit/objects';

/**
 * Interface for responses that return a list or loaded objects.
 **/
export interface IRepList<TBase extends Base> {
	/**
	 * The collection of objects.
	 **/
	getCollection(): TBase[];
}