import { guid } from "@trakit/objects";

/**
 * A container class used to house the guid identifying a resource.
 **/
export class ParamGuid {
	/**
	 * The global unique identifier.
	 **/
	guid: guid;

	constructor(json: any) {
		this.guid = json?.guid ?? "";
	}
}