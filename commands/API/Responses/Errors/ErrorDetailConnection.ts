import { JsonObject, nothing } from "@trakit/objects";
import { ErrorDetail } from "./ErrorDetail";
import { ErrorDetailType } from "./ErrorDetailType";

/**
 * Details for how many and which {@link Asset}s and {@link User}s are still using this {@link Contact}.
 */
export class ErrorDetailConnection extends ErrorDetail {
	override get kind() { return ErrorDetailType.connection; }

	/**
	 * The WebSocket connection state.
	 */
	state: number;
	/**
	 * The WebSocket connection close code (if applicable).
	 */
	code: number | nothing;
	/**
	 * The WebSocket connection close reason (if applicable).
	 */
	reason: string | nothing;
	/**
	 * Whether the WebSocket connection was closed cleanly (if applicable).
	 */
	wasClean: boolean | nothing;
	/**
	 * Whether the client will attempt to reconnect.
	 */
	reconnect: boolean | nothing;
	/**
	 * If `reconnect` is `true`, the number of milliseconds until the next reconnect attempt.
	 */
	retry: number | nothing;

	constructor(json: JsonObject) {
		super();
		this.state = json?.state as number ?? WebSocket.CLOSED;
		this.code = json?.code as number;
		this.reason = json?.reason as string;
		this.wasClean = json?.wasClean as boolean;
		this.reconnect = json?.reconnect as boolean;
		this.retry = json?.retry as number;
	}

	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			"state": this.state,
			"code": this.code ?? null,
			"reason": this.reason ?? null,
			"wasClean": this.wasClean ?? null,
			"reconnect": this.reconnect ?? null,
			"retry": this.retry ?? null,
		};
	}
}