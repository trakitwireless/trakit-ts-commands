import { ISerializable, JsonObject } from "@trakit/objects";

/**
 * A container class used to house the "code" identifying a resource.
 */
export class ParamCode implements ISerializable {
	/**
	 * A "code" identifying a resource.
	 * <override required="always" />
	 */
	code: string;

	constructor(json?: JsonObject) {
		this.code = json?.code as string ?? "";
	}

	toJSON(): JsonObject {
		return this.code?.trim()
			? { code: this.code.trim() }
			: {};
	}
}