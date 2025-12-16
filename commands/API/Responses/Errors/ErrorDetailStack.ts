import { JsonObject, JsonValue, nothing } from "@trakit/objects";
import { ErrorDetail } from "./ErrorDetail";
import { ErrorDetailType } from "./ErrorDetailType";

/**
 * For unhandled exceptions, a full stack trace may be given.
 * <remarks>
 * Only available for some of the beta services.
 * </remarks>
 */
export class ErrorDetailStack extends ErrorDetail {
	override get kind() { return ErrorDetailType.stack; }
	/**
	 * Exception message.
	 */
	message: string;
	/**
	 * The full stack trace if available.
	 */
	stack: string;
	/**
	 * The value associated with the error, if any.
	 */
	value: any;

	constructor(json: JsonObject) {
		super();
		this.message = json?.message as string ?? "";
		this.stack = json?.stack as string ?? "";
		this.value = json?.value;
	}

	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			"message": this.message,
			"stack": this.stack,
			"value": this.value ?? null,
		};
	}
}