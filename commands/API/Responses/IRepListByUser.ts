import { ContentLogin } from "./Content/ContentLogin";

/**
 * Interface for responses that return a list by user.
 **/
export interface IRepListByUser {
	/**
	 * The user to filter the list by.
	 **/
	user: ContentLogin;
}