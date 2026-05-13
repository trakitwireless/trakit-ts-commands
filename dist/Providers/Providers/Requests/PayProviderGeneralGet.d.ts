import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { PayProvider } from "./PayProvider";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
/**
 * Gets details of the specified {@link ProviderGeneral}.
 */
export declare class PayProviderGeneralGet extends PayProvider implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link ProviderGeneral} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayProviderGeneralGet.d.ts.map