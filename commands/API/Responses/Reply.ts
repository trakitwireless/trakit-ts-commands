import { int, ISerializable, JsonObject, nothing, utility } from '@trakit/objects';
import { ErrorCode } from "./Errors/ErrorCode";
import { ErrorDetail } from "./Errors/ErrorDetail";

/**
 * Base class for all responses from commands.
 * All command response classes use this as the base.
 */
export class Reply implements ISerializable {
	/**
	 * Identifier used by external system to correlate requests to responses.
	 * This is only used with the Trak-iT WebSocket API service.
	 */
	reqId: int | undefined;
	/**
	 * The unique, numeric error code when processing this request.
	 */
	errorCode: ErrorCode;
	/**
	 * An English description of the error.
	 */
	message: string;
	/**
	 * An object to provide developers with a hint about the nature of the error.
	 * The key is not always present, and only available for some errors.
	 */
	errorDetails: ErrorDetail | nothing;

	constructor(json: JsonObject) {
		this.errorCode = json?.errorCode as ErrorCode ?? ErrorCode.unknown;
		this.message = json?.message as string ?? "Unknown error";
		this.errorDetails = ErrorDetail.fromJSON(json?.errorDetails as JsonObject);
		this.reqId = json?.reqId as int;
	}
	
	toJSON(): JsonObject {
		const json: JsonObject = {
			"errorCode": this.errorCode,
			"message": this.message,
			"errorDetails": this.errorDetails?.toJSON() ?? null,
		};
		if (utility.isntNaN(this.reqId)) {
			json.reqId = this.reqId;
		}
		return json;
	}
}