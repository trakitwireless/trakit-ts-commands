import { JsonObject } from "@trakit/objects";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
import { ParamCompanyMerge } from "./Parameters/ParamCompanyMerge";
/**
 *
 */
export declare class PayCompanyBatchMerge extends Payload {
    /**
     *
     */
    companies: ParamCompanyMerge[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayCompanyBatchMerge.d.ts.map