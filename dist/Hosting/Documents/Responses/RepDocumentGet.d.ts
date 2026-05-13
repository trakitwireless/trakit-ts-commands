import { Document, JsonObject, nothing, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link document}.
 */
export declare class RepDocumentGet extends ReplySyncGet<Document> {
    /**
     * The requested {@link Document}.
     */
    document: Document | nothing;
    constructor(json: JsonObject);
    getObject(): Document;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepDocumentGet.d.ts.map