import { DispatchTask, JsonObject, nothing, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link dispatchTask}.
 */
export declare class RepDispatchTaskGet extends ReplySyncGet<DispatchTask> {
    /**
     * The requested {@link DispatchTask}.
     */
    dispatchTask: DispatchTask | nothing;
    constructor(json: JsonObject);
    getObject(): DispatchTask;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepDispatchTaskGet.d.ts.map