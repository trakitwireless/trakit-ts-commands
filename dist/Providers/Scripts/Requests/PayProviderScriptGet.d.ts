import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { PayProviderScript } from "./PayProviderScript";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
/**
 * Gets details of the specified {@link ProviderScript}.
 */
export declare class PayProviderScriptGet extends PayProviderScript implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link ProviderScript} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayProviderScriptGet.d.ts.map