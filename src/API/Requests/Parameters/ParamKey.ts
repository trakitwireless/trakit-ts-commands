import { ISerializable, JsonObject } from "@trakit/objects";

/**
 * A container class used to house the key identifying a {@link Machine}.
 */
export class ParamKey implements ISerializable {
	/**
	 * The {@link Machine}'s login.
	 */
	key: string;

	constructor(json?: JsonObject) {
		this.key = json?.key as string ?? "";
	}

	toJSON(): JsonObject {
		return this.key?.trim()
			? { key: this.key.trim() }
			: {};
	}
}