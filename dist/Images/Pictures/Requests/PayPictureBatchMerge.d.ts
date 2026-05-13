import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { ParamPictureMerge } from "./Parameters/ParamPictureMerge";
/**
 *
 */
export declare class PayPictureBatchMerge extends Payload {
    /**
     *
     */
    pictures: ParamPictureMerge[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayPictureBatchMerge.d.ts.map