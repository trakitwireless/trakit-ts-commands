import { codified } from "@objects/API/Types";

/**
 * Interface for responses that return a list by labels.
 **/
export interface IRepListByLabels {
	/**
	 * The labels to filter the list by.
	 **/
	labels: codified[];
}