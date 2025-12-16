import { guid, JsonObject } from "@trakit/objects";

/**
 * A container class used to house the guid identifying a resource.
 */
export class ParamGuid {
	/**
	 * The global unique identifier.
	 */
	guid: guid;

	constructor(json?: JsonObject) {
		this.guid = json?.guid as guid ?? "";
	}
}