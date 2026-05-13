import { ISerializable } from "@trakit/objects";
import { JsonObject } from "@trakit/objects";

/**
 * A container class used to house the string identifying a {@link Provider}.
 */
export class ParamIdentifier implements ISerializable {
	/**
	 * The {@link Provider}'s identifier.
	 */
	id: string;

	constructor(json?: JsonObject) {
		this.id = json?.id as string ?? "";
	}
	toJSON(): JsonObject {
		return this.id?.trim()
			? { id: this.id.trim() }
			: {};
	}
}