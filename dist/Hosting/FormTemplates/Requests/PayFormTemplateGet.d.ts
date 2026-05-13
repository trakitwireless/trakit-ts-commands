import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { PayFormTemplate } from "./PayFormTemplate";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
/**
 * Gets details of the specified {@link FormTemplate}.
 */
export declare class PayFormTemplateGet extends PayFormTemplate implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link FormTemplate} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayFormTemplateGet.d.ts.map