import { DispatchJob, JsonObject, nothing, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link dispatchJob}.
 */
export declare class RepDispatchJobGet extends ReplySyncGet<DispatchJob> {
    /**
     * The requested {@link DispatchJob}.
     */
    dispatchJob: DispatchJob | nothing;
    constructor(json: JsonObject);
    getObject(): DispatchJob;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepDispatchJobGet.d.ts.map