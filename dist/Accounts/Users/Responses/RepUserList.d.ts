import { codified, email, guid, JsonObject, nothing, ulong, User } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
/**
 * A container for the requested {@link User}s.
 */
export declare abstract class RepUserList extends ReplySyncList<User> {
    /**
     * The list of requested {@link User}s.
     */
    users: User[] | nothing;
    constructor(json: JsonObject);
    getList(): User[];
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepUserListByCompany extends RepUserList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, User], index: number): boolean;
    getCompanyId(): ulong;
}
/**
 * Contains the {@link UserGroup.id} of the collection.
 */
export declare class RepUserListByUserGroup extends RepUserList {
    /**
     * Identifier of the {@link UserGroup} to which this collection belongs.
     */
    userGroup: ContentIdCompany | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, User], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepUserList.d.ts.map