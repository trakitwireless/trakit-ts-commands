import { JsonObject, nothing } from "@trakit/objects";
import { PayloadListBy } from "./PayloadListBy";
/**
 * Interface for requests that filter by date.
 */
export declare abstract class PayloadListByDate extends PayloadListBy {
    /**
     * The start date for the filter.
     */
    after: Date | nothing;
    /**
     * The end date for the filter.
     */
    before: Date | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayloadListByDate.d.ts.map