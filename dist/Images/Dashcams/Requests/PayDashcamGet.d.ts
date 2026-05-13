import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Reply } from "../../../API/Responses/Reply";
import { PayDashcam } from "./PayDashcam";
/**
 * Gets details of the specified {@link Dashcam}.
 */
export declare class PayDashcamGet extends PayDashcam implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link Dashcam} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayDashcamGet.d.ts.map