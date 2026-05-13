import { JsonObject } from "@trakit/objects";
import { ulong } from "@trakit/objects";
import { ErrorDetailBadBase } from "./ErrorDetailBadBase";
import { ErrorDetailType } from "./ErrorDetailType";
/**
 * These details contain unique identifiers that caused the failure.
 */
export declare class ErrorDetailBadIds extends ErrorDetailBadBase<ulong> {
    get kind(): ErrorDetailType;
    constructor(json: JsonObject);
}
//# sourceMappingURL=ErrorDetailBadIds.d.ts.map