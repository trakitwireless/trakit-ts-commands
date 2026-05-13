import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { ParamFormTemplateMerge } from "./Parameters/ParamFormTemplateMerge";
/**
 *
 */
export declare class PayFormTemplateBatchMerge extends Payload {
    /**
     *
     */
    formTemplates: ParamFormTemplateMerge[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayFormTemplateBatchMerge.d.ts.map