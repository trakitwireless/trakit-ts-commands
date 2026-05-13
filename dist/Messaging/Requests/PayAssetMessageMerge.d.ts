import { JsonObject } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { Payload } from "../../API/Requests/Payload";
import { IPaySingle } from "../../API/Requests/IPaySingle";
import { ParamAssetMessageMerge } from "./Parameters/ParamAssetMessageMerge";
/**
 * Creates a new or updates an existing {@link AssetMessage}.
 */
export declare class PayAssetMessageMerge extends Payload implements IPaySingle {
    /**
     * Parameters given to create or update a {@link AssetMessage}.
     */
    assetMessage: ParamAssetMessageMerge;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayAssetMessageMerge.d.ts.map