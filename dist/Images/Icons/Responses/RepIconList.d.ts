import { codified, email, guid, Icon, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link icons}.
 */
export declare abstract class RepIconList extends ReplySyncList<Icon> {
    /**
     * The list of requested {@link Icon}s.
     */
    icons: Icon[] | nothing;
    constructor(json: JsonObject);
    getList(): Icon[];
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepIconListByCompany extends RepIconList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, Icon], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepIconList.d.ts.map