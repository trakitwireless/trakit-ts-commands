import { JsonObject } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { ParamContactMerge } from "./Parameters/ParamContactMerge";
/**
 *
 */
export declare class PayContactBatchMerge extends Payload {
    /**
     *
     */
    contacts: ParamContactMerge[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayContactBatchMerge.d.ts.map