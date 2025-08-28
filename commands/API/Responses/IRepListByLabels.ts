import { codified } from '@trakit/objects';

/**
 * Interface for responses that return a list by labels.
 **/
export interface IRepListByLabels {
	/**
	 * The labels to filter the list by.
	 **/
	labels: codified[];
}