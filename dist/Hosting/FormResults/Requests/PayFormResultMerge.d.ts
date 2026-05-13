import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { ParamFormResultMerge } from "./Parameters/ParamFormResultMerge";
/**
 * Creates a new or updates an existing {@link FormResult}.
 */
export declare class PayFormResultMerge extends Payload implements IPaySingle {
    /**
     * Parameters given to create or update a {@link FormResult}.
     */
    formResult: ParamFormResultMerge;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayFormResultMerge.d.ts.map