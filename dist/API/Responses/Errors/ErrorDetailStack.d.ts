import { JsonObject } from "@trakit/objects";
import { ErrorDetail } from "./ErrorDetail";
import { ErrorDetailType } from "./ErrorDetailType";
/**
 * For unhandled exceptions, a full stack trace may be given.
 * <remarks>
 * Only available for some of the beta services.
 * </remarks>
 */
export declare class ErrorDetailStack extends ErrorDetail {
    get kind(): ErrorDetailType;
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
    constructor(json: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ErrorDetailStack.d.ts.map