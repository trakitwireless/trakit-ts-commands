import { JsonObject } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { Payload } from "../../API/Requests/Payload";
import { ParamPlaceMerge } from "./Parameters/ParamPlaceMerge";
/**
 *
 */
export declare class PayPlaceBatchMerge extends Payload {
    /**
     *
     */
    places: ParamPlaceMerge[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayPlaceBatchMerge.d.ts.map