import { JsonObject } from "@trakit/objects";
import { Reply } from "../Reply";
import { ErrorDetail } from "./ErrorDetail";
import { ErrorDetailType } from "./ErrorDetailType";
/**
 * For batch commands, these are the errors thrown by the sub-command.
 */
export declare class ErrorDetailBatch extends ErrorDetail {
    get kind(): ErrorDetailType;
    /**
     * Index-preserved list of sub-command errors.
     */
    errors: Reply[];
    constructor(json: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ErrorDetailBatch.d.ts.map