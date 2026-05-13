import { guid, ISerializable, JsonObject } from "@trakit/objects";

/**
 * A container class used to house the guid identifying a resource.
 */
export class ParamGuid implements ISerializable {
	/**
	 * The global unique identifier.
	 */
	guid: guid;

	constructor(json?: JsonObject) {
		this.guid = json?.guid as guid ?? "";
	}
	toJSON(): JsonObject {
		return this.guid?.trim()
			? { guid: this.guid.trim() }
			: {};
	}
}