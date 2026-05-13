import { JsonObject, nothing } from "@trakit/objects";
import { PayloadListBy } from "./PayloadListBy";
/**
 * Interface for requests on a list of objects by key.
 */
export declare abstract class PayloadListByKey extends PayloadListBy {
    /**
     * The first key to filter the list by.
     */
    first: string | nothing;
    /**
     * The last key to filter the list by.
     */
    last: string | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayloadListByKey.d.ts.map