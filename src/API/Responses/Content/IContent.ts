import { codified, email, guid, ulong } from "@trakit/objects";

/**
 * Interface for content objects returned by API responses.
 */
export interface IContent {
	/**
	 * Retrieves the unique key of the content object.
	 */
	getKey(): ulong | guid | email | codified | string;
}