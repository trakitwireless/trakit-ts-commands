import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { ParamContactMerge } from "./Parameters/ParamContactMerge";
/**
 * Creates a new or updates an existing {@link Contact}.
 */
export declare class PayContactMerge extends Payload implements IPaySingle {
    /**
     * Parameters given to create or update a {@link Contact}.
     */
    contact: ParamContactMerge;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayContactMerge.d.ts.map