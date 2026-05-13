import { JsonObject } from "@trakit/objects";
import { ErrorDetail } from "./ErrorDetail";
import { ErrorDetailType } from "./ErrorDetailType";
/**
 * These are the errors/warnings taken from the output of some other system.
 */
export declare class ErrorDetailExternals extends ErrorDetail {
    get kind(): ErrorDetailType;
    /**
     * List of errors.
     */
    errors: string[];
    /**
     * List of warnings.
     */
    warnings: string[];
    /**
     * List of messages.
     */
    messages: string[];
    constructor(json: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ErrorDetailExternals.d.ts.map