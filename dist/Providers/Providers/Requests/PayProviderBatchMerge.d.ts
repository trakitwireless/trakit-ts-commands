import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { ParamProviderMerge } from "./Parameters/ParamProviderMerge";
/**
 *
 */
export declare class PayProviderBatchMerge extends Payload {
    /**
     *
     */
    providers: ParamProviderMerge[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayProviderBatchMerge.d.ts.map