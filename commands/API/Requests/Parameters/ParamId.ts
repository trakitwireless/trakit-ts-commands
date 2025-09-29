import { ulong } from "@trakit/objects";

/**
 * A container class used to house the id of the object requested.
 **/
export class ParamId {
	/**
	 * Identifier given as input for the command.
	 **/
	id: ulong;

	constructor(json?: JsonObject) {
		this.id = json?.id;
	}
}