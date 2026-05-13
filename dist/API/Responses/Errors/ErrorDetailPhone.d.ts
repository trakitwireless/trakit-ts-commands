import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ErrorDetailInput } from "./ErrorDetailInput";
import { ErrorDetailType } from "./ErrorDetailType";
/**
 * These are the details of a phone number input that failed to parse.
 */
export declare class ErrorDetailPhone extends ErrorDetailInput {
    get kind(): ErrorDetailType;
    /**
     * The number that was parsed from the input.
     */
    number: ulong | nothing;
    /**
     * The digital characters used to try to parse the number.
     */
    usable: string | nothing;
    constructor(json: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ErrorDetailPhone.d.ts.map