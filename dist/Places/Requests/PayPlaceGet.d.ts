import { JsonObject } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { PayPlace } from "./PayPlace";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
/**
 * Gets details of the specified {@link Place}.
 */
export declare class PayPlaceGet extends PayPlace implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link Place} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayPlaceGet.d.ts.map