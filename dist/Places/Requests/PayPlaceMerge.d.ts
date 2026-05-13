import { JsonObject } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { Payload } from "../../API/Requests/Payload";
import { IPaySingle } from "../../API/Requests/IPaySingle";
import { ParamPlaceMerge } from "./Parameters/ParamPlaceMerge";
/**
 * Creates a new or updates an existing {@link Place}.
 */
export declare class PayPlaceMerge extends Payload implements IPaySingle {
    /**
     * Parameters given to create or update a {@link Place}.
     */
    place: ParamPlaceMerge;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayPlaceMerge.d.ts.map