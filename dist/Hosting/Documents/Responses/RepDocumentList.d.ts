import { codified, Document, email, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link documents}.
 */
export declare abstract class RepDocumentList extends ReplySyncList<Document> {
    /**
     * The list of requested {@link Document}s.
     */
    documents: Document[] | nothing;
    constructor(json: JsonObject);
    getList(): Document[];
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepDocumentListByCompany extends RepDocumentList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, Document], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepDocumentList.d.ts.map