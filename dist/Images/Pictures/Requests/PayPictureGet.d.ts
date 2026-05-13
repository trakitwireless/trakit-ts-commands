import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { PayPicture } from "./PayPicture";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
/**
 * Gets details of the specified {@link Picture}.
 */
export declare class PayPictureGet extends PayPicture implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link Picture} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayPictureGet.d.ts.map