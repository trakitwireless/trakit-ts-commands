import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamIconMerge } from "./Parameters/ParamIconMerge";
/**
 * Creates a new or updates an existing {@link Icon}.
 */
export declare class PayIconMerge extends Payload implements IPaySingle {
    /**
     * Parameters given to create or update a {@link Icon}.
     */
    icon: ParamIconMerge;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayIconMerge.d.ts.map