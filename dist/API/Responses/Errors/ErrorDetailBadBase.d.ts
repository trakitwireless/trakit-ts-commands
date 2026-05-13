import { JsonObject } from "@trakit/objects";
import { ErrorDetail } from "./ErrorDetail";
/**
 * These details contain a list of bad keys, labels or tags, unique identifiers, or parameter names that caused the failure.
 */
export declare abstract class ErrorDetailBadBase<T> extends ErrorDetail {
    /**
     * List of bad ids or keys or whatever.
     */
    invalid: T[];
    constructor(json: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ErrorDetailBadBase.d.ts.map