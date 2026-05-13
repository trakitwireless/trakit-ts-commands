import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamProviderMerge } from "./Parameters/ParamProviderMerge";
/**
 * Creates a new or updates an existing {@link Provider}.
 */
export declare class PayProviderMerge extends Payload implements IPaySingle {
    /**
     * Parameters given to create or update a {@link Provider}.
     */
    provider: ParamProviderMerge;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayProviderMerge.d.ts.map