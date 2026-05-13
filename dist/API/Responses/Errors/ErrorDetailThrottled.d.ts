import { int, JsonObject, TimeSpan } from "@trakit/objects";
import { ErrorDetail } from "./ErrorDetail";
import { ErrorDetailType } from "./ErrorDetailType";
/**
 * Details of a command or session being throttled.
 */
export declare class ErrorDetailThrottled extends ErrorDetail {
    get kind(): ErrorDetailType;
    /**
     * The session identifier being throttled.
     */
    ghostId: string;
    /**
     * The {@link User} being throttled.
     */
    login: string;
    /**
     * The client IP address.
     */
    ip: string;
    /**
     * The name of the WebSocket command, or the RESTful route.
     */
    command: string;
    /**
     * How many times this command was invoked during the window.
     * Alternatively, can be the maximum number of times this command can be invoked (like creating a session).
     */
    count: int;
    /**
     * The size of the window.
     * If this throttled command has no window (ie; creating too many sessions) this value is null.
     */
    timeout: TimeSpan;
    constructor(json: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ErrorDetailThrottled.d.ts.map