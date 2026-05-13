import { Behaviour, JsonObject, nothing, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link behaviour}.
 */
export declare class RepBehaviourGet extends ReplySyncGet<Behaviour> {
    /**
     * The requested {@link Behaviour}.
     */
    behaviour: Behaviour | nothing;
    constructor(json: JsonObject);
    getObject(): Behaviour;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepBehaviourGet.d.ts.map