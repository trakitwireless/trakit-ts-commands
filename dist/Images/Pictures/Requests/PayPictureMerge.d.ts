import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamPictureMerge } from "./Parameters/ParamPictureMerge";
/**
 * Creates a new or updates an existing {@link Picture}.
 */
export declare class PayPictureMerge extends Payload implements IPaySingle {
    /**
     * Parameters given to create or update a {@link Picture}.
     */
    picture: ParamPictureMerge;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayPictureMerge.d.ts.map