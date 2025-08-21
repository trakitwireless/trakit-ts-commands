import { ulong } from "@objects/API/Types";
/**
 * Interface for responses that return a list of objects by ID.
 **/
export interface IRepListById {
	/**
	 * The lowest unique identifier in the list.
	 **/
	lowest?: ulong;
	/**
	 * The highest unique identifier in the list.
	 **/
	highest?: ulong;
}