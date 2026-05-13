import { int, JsonObject, nothing } from "@trakit/objects";
import { ErrorDetail } from "./ErrorDetail";
import { ErrorDetailType } from "./ErrorDetailType";
/**
 * These are the details of an exception while trying to parse the JSON input.
 */
export declare class ErrorDetailParse extends ErrorDetail {
    get kind(): ErrorDetailType;
    /**
     * The line number in the input string.
     */
    line: int | nothing;
    /**
     * The character on which the failure occurred.
     */
    column: int | nothing;
    /**
     * The last sucessfully parsed object.
     */
    after: string | nothing;
    constructor(json: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ErrorDetailParse.d.ts.map