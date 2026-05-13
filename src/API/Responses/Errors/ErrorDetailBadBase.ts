import { JsonObject } from "@trakit/objects";
import { ErrorDetail } from "./ErrorDetail";

/**
 * These details contain a list of bad keys, labels or tags, unique identifiers, or parameter names that caused the failure.
 */
export abstract class ErrorDetailBadBase<T> extends ErrorDetail {
	/**
	 * List of bad ids or keys or whatever.
	 */
	invalid: T[];

	constructor(json: JsonObject) {
		super();
		this.invalid = json?.invalid as T[] ?? [];
	}
	
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			"invalid": [...this.invalid] as any[],
		};
	}
}