import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../API/Requests/IPaySingle";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
import { ParamCompanyResellerMerge } from "./Parameters/ParamCompanyResellerMerge";
/**
 * Creates a new or updates an existing {@link Company}.
 */
export declare class PayCompanyResellerMerge extends Payload implements IPaySingle {
    /**
     * Parameters given to create or update a {@link Company}.
     */
    companyReseller: ParamCompanyResellerMerge;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayCompanyResellerMerge.d.ts.map