import { JsonObject } from "@trakit/objects";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
/**
 *
 */
export declare class PayCompanyBatchDelete extends Payload {
    /**
     *
     */
    companies: ParamId[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayCompanyBatchDelete.d.ts.map