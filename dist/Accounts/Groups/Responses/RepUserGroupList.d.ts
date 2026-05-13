import { codified, email, guid, JsonObject, nothing, ulong, UserGroup } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link userGroups}.
 */
export declare abstract class RepUserGroupList extends ReplySyncList<UserGroup> {
    /**
     * The list of requested {@link UserGroup}s.
     */
    userGroups: UserGroup[] | nothing;
    constructor(json: JsonObject);
    getList(): UserGroup[];
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepUserGroupListByCompany extends RepUserGroupList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, UserGroup], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepUserGroupList.d.ts.map