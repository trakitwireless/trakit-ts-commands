import { ISerializable, JsonObject, ulong, utility } from "@trakit/objects";

/**
 * A container class used to house the id of the object requested.
 */
export class ParamId implements ISerializable {
	/**
	 * Identifier given as input for the command.
	 */
	id: ulong;

	constructor(json?: JsonObject) {
		this.id = json?.id as ulong;
	}

	toJSON(): JsonObject {
		return utility.isntNaN(this.id)
			? { id: this.id }
			: {};
	}
}