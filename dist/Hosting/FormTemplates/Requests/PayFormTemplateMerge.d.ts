import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamFormTemplateMerge } from "./Parameters/ParamFormTemplateMerge";
/**
 * Creates a new or updates an existing {@link FormTemplate}.
 */
export declare class PayFormTemplateMerge extends Payload implements IPaySingle {
    /**
     * Parameters given to create or update a {@link FormTemplate}.
     */
    formTemplate: ParamFormTemplateMerge;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayFormTemplateMerge.d.ts.map