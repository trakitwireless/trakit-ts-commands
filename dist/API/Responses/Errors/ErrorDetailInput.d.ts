import { JsonObject } from "@trakit/objects";
import { ErrorDetail } from "./ErrorDetail";
import { ErrorDetailType } from "./ErrorDetailType";
/**
 * These are the details of an input or format exception.
 */
export declare class ErrorDetailInput extends ErrorDetail {
    get kind(): ErrorDetailType;
    /**
     * The given input which caused the error.
     */
    input: string;
    constructor(json: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ErrorDetailInput.d.ts.map