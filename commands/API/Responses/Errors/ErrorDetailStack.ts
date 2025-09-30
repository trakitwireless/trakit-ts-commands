import { JsonObject } from "@trakit/objects";
import { ErrorDetail } from "./ErrorDetail";
import { ErrorDetailType } from "./ErrorDetailType";

/**
 * For unhandled exceptions, a full stack trace may be given.
 * <remarks>
 * Only available for some of the beta services.
 * </remarks>
 **/
export class ErrorDetailStack extends ErrorDetail {
	override get kind() { return ErrorDetailType.stack; }
	/**
	 * Exception message.
	 **/
	message: string;
	/**
	 * The full stack trace if available.
	 **/
	stack: string;

	constructor(json: JsonObject) {
		super();
		this.message = json?.message as string ?? "";
		this.stack = json?.stack as string ?? "";
	}
}