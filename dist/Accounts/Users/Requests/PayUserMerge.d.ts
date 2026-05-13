import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamUserMerge } from "./Parameters/ParamUserMerge";
/**
 * Creates a new or updates an existing {@link User}.
 */
export declare class PayUserMerge extends Payload implements IPaySingle {
    /**
     * Parameters given to create or update a {@link User}.
     */
    user: ParamUserMerge;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayUserMerge.d.ts.map