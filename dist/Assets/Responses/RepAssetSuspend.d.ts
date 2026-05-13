import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdSuspended } from "../../API/Responses/Content/ContentIdSuspended";
import { ReplySync } from "../../API/Responses/ReplySync";
/**
 *
 */
export declare class RepAssetSuspend extends ReplySync {
    /**
     *
     */
    asset: ContentIdSuspended | nothing;
    constructor(json: JsonObject);
    getCompanyId(): ulong;
    store(): boolean;
}
//# sourceMappingURL=RepAssetSuspend.d.ts.map