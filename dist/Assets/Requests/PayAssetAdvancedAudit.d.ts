import { JsonObject, SyncName } from "@trakit/objects";
import { IPayListByAsset } from "../../API/Requests/IPayListByAsset";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { PayloadAudit } from "../../API/Requests/PayloadAudit";
import { ActionType } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
/**
 * Gets import { codified } from "@trakit/objects";
details of the specified {@link AssetAdvanced}.
 */
export declare class PayAssetAdvancedAudit extends PayloadAudit implements IPayListByAsset {
    /**
     *
     */
    asset: ParamId;
    constructor(json?: JsonObject);
    /**
     * Overridden to add the object type.
     * @returns
     */
    getAction(): {
        object: SyncName;
        kind: ActionType;
        filter: string;
        batch: boolean;
    };
    getKey(): string;
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayAssetAdvancedAudit.d.ts.map