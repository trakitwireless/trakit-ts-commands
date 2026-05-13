import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Reply } from "../../../API/Responses/Reply";
import { PayMachine } from "./PayMachine";
/**
 * Gets details of the specified {@link Machine}.
 */
export declare class PayMachineGet extends PayMachine implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link Machine} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayMachineGet.d.ts.map