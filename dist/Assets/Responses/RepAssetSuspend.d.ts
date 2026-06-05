import { Asset, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdSuspended } from "../../API/Responses/Content/ContentIdSuspended";
import { ReplySyncGet } from "../../API/Responses/ReplySyncGet";
/**
 *
 */
export declare class RepAssetSuspend extends ReplySyncGet<Asset> {
    /**
     *
     */
    asset: ContentIdSuspended | nothing;
    constructor(json: JsonObject);
    getObject(): Asset;
    getCompanyId(): ulong;
    store(): boolean;
}
//# sourceMappingURL=RepAssetSuspend.d.ts.map