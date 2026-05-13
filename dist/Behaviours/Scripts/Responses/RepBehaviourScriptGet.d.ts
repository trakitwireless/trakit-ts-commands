import { BehaviourScript, JsonObject, nothing, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link behaviourScript}.
 */
export declare class RepBehaviourScriptGet extends ReplySyncGet<BehaviourScript> {
    /**
     * The requested {@link BehaviourScript}.
     */
    behaviourScript: BehaviourScript | nothing;
    constructor(json: JsonObject);
    getObject(): BehaviourScript;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepBehaviourScriptGet.d.ts.map