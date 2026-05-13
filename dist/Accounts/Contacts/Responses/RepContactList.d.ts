import { codified, Contact, email, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link contacts}.
 */
export declare abstract class RepContactList extends ReplySyncList<Contact> {
    /**
     * The list of requested {@link Contact}s.
     */
    contacts: Contact[] | nothing;
    constructor(json: JsonObject);
    getList(): Contact[];
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepContactListByCompany extends RepContactList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, Contact], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepContactList.d.ts.map