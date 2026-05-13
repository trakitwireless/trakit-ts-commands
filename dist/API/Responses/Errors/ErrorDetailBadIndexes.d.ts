import { JsonObject } from "@trakit/objects";
import { int } from "@trakit/objects";
import { ErrorDetailBadBase } from "./ErrorDetailBadBase";
import { ErrorDetailType } from "./ErrorDetailType";
/**
 * These details contain array indexes that caused the failure.
 */
export declare class ErrorDetailBadIndexes extends ErrorDetailBadBase<int> {
    get kind(): ErrorDetailType;
    constructor(json: JsonObject);
}
//# sourceMappingURL=ErrorDetailBadIndexes.d.ts.map