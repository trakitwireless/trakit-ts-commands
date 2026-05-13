import { double, JsonObject, nothing } from "@trakit/objects";
import { ErrorDetail } from "./ErrorDetail";
import { ErrorDetailType } from "./ErrorDetailType";
/**
 * These are the details of when a value needed to be within a certain range, and was not.
 */
export declare class ErrorDetailMinMax extends ErrorDetail {
    get kind(): ErrorDetailType;
    /**
     * Minimum possible value.
     */
    min: Date | double | nothing;
    /**
     * Maximum possible value.
     */
    max: Date | double | nothing;
    constructor(json: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ErrorDetailMinMax.d.ts.map