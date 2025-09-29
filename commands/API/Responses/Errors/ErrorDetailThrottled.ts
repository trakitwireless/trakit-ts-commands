import { int, nothing, TimeSpan } from "@trakit/objects";
import { ErrorDetail } from "./ErrorDetail";
import { ErrorDetailType } from "./ErrorDetailType";

/**
 * Details of a command or session being throttled.
 **/
export class ErrorDetailThrottled extends ErrorDetail {
	override get kind() { return ErrorDetailType.throttled; }
	/**
	 * The session identifier being throttled.
	 **/
	ghostId: string;
	/**
	 * The {@link User} being throttled.
	 **/
	login: string;
	/**
	 * The client IP address.
	 **/
	ip: string;
	/**
	 * The name of the WebSocket command, or the RESTful route.
	 **/
	command: string;
	/**
	 * How many times this command was invoked during the window.
	 * Alternatively, can be the maximum number of times this command can be invoked (like creating a session).
	 **/
	count: int;
	/**
	 * The size of the window.
	 * If this throttled command has no window (ie; creating too many sessions) this value is null.
	 **/
	timeout: TimeSpan;

	constructor(json: JsonObject) {
		super();
		this.ghostId = json?.ghostId ?? "";
		this.login = json?.login ?? "";
		this.ip = json?.ip ?? "";
		this.command = json?.command ?? "";
		this.count = json?.count ?? 0;
		this.timeout = new TimeSpan(json.timeout);
	}
}