import { JsonObject, nothing, ulong } from "@trakit/objects";
import { PayloadListBy } from "./PayloadListBy";
/**
 * For commands that list objects by an ulong value.
 */
export declare abstract class PayloadListById extends PayloadListBy {
    /**
     * The lowest ID in the range.
     */
    lowest: ulong | nothing;
    /**
     * The highest ID in the range.
     */
    highest: ulong | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayloadListById.d.ts.map