import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ParamIdentifier } from "../../../API/Requests/Parameters/ParamIdentifier";
import { Payload } from "../../../API/Requests/Payload";
/**
 *
 */
export declare class PayProviderBatchDelete extends Payload {
    /**
     *
     */
    providers: ParamIdentifier[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayProviderBatchDelete.d.ts.map