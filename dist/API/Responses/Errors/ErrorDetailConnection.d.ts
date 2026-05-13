import { JsonObject, nothing } from "@trakit/objects";
import { ErrorDetail } from "./ErrorDetail";
import { ErrorDetailType } from "./ErrorDetailType";
/**
 * Details for how many and which {@link Asset}s and {@link User}s are still using this {@link Contact}.
 */
export declare class ErrorDetailConnection extends ErrorDetail {
    get kind(): ErrorDetailType;
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
    constructor(json: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ErrorDetailConnection.d.ts.map