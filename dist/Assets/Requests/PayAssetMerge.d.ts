import { JsonObject } from "@trakit/objects";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
import { ParamAssetMerge } from "./Parameters/ParamAssetMerge";
/**
 * Container for the command to creates a new, or updates an existing {@link Asset}.
 */
export declare class PayAssetMerge extends Payload {
    /**
     * Parameters given to create or update an {@link Asset}.
     */
    asset: ParamAssetMerge;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayAssetMerge.d.ts.map