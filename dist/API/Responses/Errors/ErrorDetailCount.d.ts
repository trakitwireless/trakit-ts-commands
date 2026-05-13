import { int, JsonObject } from "@trakit/objects";
import { ErrorDetail } from "./ErrorDetail";
import { ErrorDetailType } from "./ErrorDetailType";
/**
 * These are the details when a number of things create the exception.
 */
export declare class ErrorDetailCount extends ErrorDetail {
    get kind(): ErrorDetailType;
    /**
     * The number of items that failed, or number of items preventing success.
     */
    count: int;
    constructor(json: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ErrorDetailCount.d.ts.map