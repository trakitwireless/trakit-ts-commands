import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { PayDispatchJob } from "./PayDispatchJob";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
/**
 * Gets details of the specified {@link DispatchJob}.
 */
export declare class PayDispatchJobGet extends PayDispatchJob implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link DispatchJob} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayDispatchJobGet.d.ts.map