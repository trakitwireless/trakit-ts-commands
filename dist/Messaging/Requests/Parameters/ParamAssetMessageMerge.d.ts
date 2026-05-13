import { JsonObject, MessageFolder, MessageType, nothing, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../API/Requests/Parameters/ParamMergeSubscribable";
/**
 * Parameters used to create or update an {@link AssetMessage}.
 */
export declare class ParamAssetMessageMerge extends ParamMergeSubscribable {
    /**
     * The unique identifier of the {@link AssetMessage} you want to update.
     * Leave this as `null` when creating a new {@link AssetMessage}.
     */
    id: ulong | nothing;
    asset: ulong | nothing;
    kind: MessageType | nothing;
    folder: MessageFolder | nothing;
    to: string | nothing;
    subject: string | nothing;
    body: string | nothing;
    read: boolean | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamAssetMessageMerge.d.ts.map