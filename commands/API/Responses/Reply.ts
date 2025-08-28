import { int } from '@trakit/objects';
import { ErrorCode } from "./Errors/ErrorCode";
import { ErrorDetail } from "./Errors/ErrorDetail";

/**
 * Base class for all responses from commands.
 * All command response classes use this as the base.
 **/
export class Reply {
	/**
	 * Identifier used by external system to correlate requests to responses.
	 * This is only used with the Trak-iT WebSocket API service.
	 **/
	reqId: int | undefined;
	/**
	 * The unique, numeric error code when processing this request.
	 **/
	errorCode: ErrorCode;
	/**
	 * An English description of the error.
	 **/
	message: string;
	/**
	 * An object to provide developers with a hint about the nature of the error.
	 * The key is not always present, and only available for some errors.
	 **/
	errorDetails: ErrorDetail | null;

	constructor(errorCode: ErrorCode, message: string, errorDetails: ErrorDetail | null = null, reqId?: int) {
		this.errorCode = errorCode;
		this.message = message;
		this.errorDetails = errorDetails;
		this.reqId = reqId;
	}
}