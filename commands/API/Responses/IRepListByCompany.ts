import { ContentId } from "./Content/ContentId";

/**
 * Interface for responses that return a list of objects by company.
 **/
export interface IRepListByCompany {
	/**
	 * The unique identifier of the company.
	 **/
	company: ContentId;
}