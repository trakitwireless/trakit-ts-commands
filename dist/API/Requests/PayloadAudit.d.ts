import { JsonObject, nothing, SyncName, ulong } from "@trakit/objects";
import { IPaySingle } from "../../API/Requests/IPaySingle";
import { ActionType } from "../../API/Requests/Payload";
import { PayloadListBy } from "./PayloadListBy";
/**
 * Interface for requests that filter by date.
 */
export declare abstract class PayloadAudit extends PayloadListBy implements IPaySingle {
    /**
     * The start date for the filter.
     */
    after: Date | nothing;
    /**
     * The end date for the filter.
     */
    before: Date | nothing;
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
    /**
     * Gets the key of the object whose change history is being requested.
     */
    abstract getKey(): string;
    /**
     * Overridden with common values for all audit requests.
     * @returns
     */
    getAction(): {
        kind: ActionType;
        object: SyncName;
        filter: string;
        batch: boolean;
    };
}
//# sourceMappingURL=PayloadAudit.d.ts.map