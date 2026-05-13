import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Reply } from "../../../API/Responses/Reply";
import { PayDispatchTask } from "./PayDispatchTask";
/**
 * Gets details of the specified {@link DispatchTask}.
 */
export declare class PayDispatchTaskGet extends PayDispatchTask implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link DispatchTask} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayDispatchTaskGet.d.ts.map