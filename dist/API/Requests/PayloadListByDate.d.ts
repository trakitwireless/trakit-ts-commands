import { JsonObject } from "@trakit/objects";
import { PayloadListBy } from "./PayloadListBy";
/**
 * Interface for requests that filter by date.
 */
export declare abstract class PayloadListByDate extends PayloadListBy {
    /**
     * The start date for the filter.
     */
    after: Date;
    /**
     * The end date for the filter.
     */
    before: Date;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayloadListByDate.d.ts.map