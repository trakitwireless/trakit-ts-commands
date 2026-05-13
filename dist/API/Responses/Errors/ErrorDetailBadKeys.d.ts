import { JsonObject } from "@trakit/objects";
import { ErrorDetailBadBase } from "./ErrorDetailBadBase";
import { ErrorDetailType } from "./ErrorDetailType";
/**
 * These details contain a list of bad keys, labels or tags, or parameter names that caused the failure.
 */
export declare class ErrorDetailBadKeys extends ErrorDetailBadBase<string> {
    get kind(): ErrorDetailType;
    constructor(json: JsonObject);
}
//# sourceMappingURL=ErrorDetailBadKeys.d.ts.map