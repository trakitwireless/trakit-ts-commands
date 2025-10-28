import { int, JsonObject } from "@trakit/objects";
import { ErrorDetail } from "./ErrorDetail";
import { ErrorDetailType } from "./ErrorDetailType";

/**
 * These are the details when a number of things create the exception.
 **/
export class ErrorDetailCount extends ErrorDetail {
	override get kind() { return ErrorDetailType.count; }

	/**
	 * The number of items that failed, or number of items preventing success.
	 **/
	count: int;

	constructor(json: JsonObject) {
		super();
		this.count = json?.count as int ?? 0;
	}

	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			"count": this.count,
		};
	}
}