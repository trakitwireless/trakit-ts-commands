import { ISerializable, JsonObject } from "@trakit/objects";

/**
 * A container class used to house the "handle" identifying a session.
 */
export class ParamHandle implements ISerializable {
	/**
	 * A "handle" identifying a session.
	 */
	handle: string;

	constructor(json?: JsonObject) {
		this.handle = json?.handle as string ?? "";
	}
	toJSON(): JsonObject {
		return this.handle?.trim()
			? { handle: this.handle.trim() }
			: {};
	}
}