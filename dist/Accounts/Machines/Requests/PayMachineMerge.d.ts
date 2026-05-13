import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { ParamMachineMerge } from "./Parameters/ParamMachineMerge";
/**
 * Creates a new or updates an existing {@link Machine}.
 */
export declare class PayMachineMerge extends Payload implements IPaySingle {
    /**
     * Parameters given to create or update a {@link Machine}.
     */
    machine: ParamMachineMerge;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayMachineMerge.d.ts.map