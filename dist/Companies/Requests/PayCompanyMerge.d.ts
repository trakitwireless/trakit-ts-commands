import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../API/Requests/IPaySingle";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
import { ParamCompanyMerge } from "./Parameters/ParamCompanyMerge";
/**
 * Creates a new or updates an existing {@link Company}.
 */
export declare class PayCompanyMerge extends Payload implements IPaySingle {
    /**
     * Parameters given to create or update a {@link Company}.
     */
    company: ParamCompanyMerge;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayCompanyMerge.d.ts.map