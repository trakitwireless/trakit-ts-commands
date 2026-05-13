import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { ParamDocumentMerge } from "./Parameters/ParamDocumentMerge";
/**
 * Creates a new or updates an existing {@link Document}.
 */
export declare class PayDocumentMerge extends Payload implements IPaySingle {
    /**
     * Parameters given to create or update a {@link Document}.
     */
    document: ParamDocumentMerge;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayDocumentMerge.d.ts.map