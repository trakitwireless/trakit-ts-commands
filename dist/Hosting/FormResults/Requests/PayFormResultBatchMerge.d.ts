import { JsonObject } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { ParamFormResultMerge } from "./Parameters/ParamFormResultMerge";
/**
 *
 */
export declare class PayFormResultBatchMerge extends Payload {
    /**
     *
     */
    formResults: ParamFormResultMerge[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayFormResultBatchMerge.d.ts.map