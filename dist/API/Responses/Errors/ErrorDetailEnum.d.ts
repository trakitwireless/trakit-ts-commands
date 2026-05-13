import { JsonObject } from "@trakit/objects";
import { ErrorDetailInput } from "./ErrorDetailInput";
import { ErrorDetailType } from "./ErrorDetailType";
/**
 * These are the details of an enum input that failed to parse.
 */
export declare class ErrorDetailEnum extends ErrorDetailInput {
    get kind(): ErrorDetailType;
    /**
     * This is a list of possible values the input should have been.
     */
    valid: string[];
    constructor(json: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ErrorDetailEnum.d.ts.map