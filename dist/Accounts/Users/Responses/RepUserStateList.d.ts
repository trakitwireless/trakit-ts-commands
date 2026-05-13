import { codified, email, guid, JsonObject, nothing, ulong, User, UserState } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { ReplySyncListPiece } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link UserState}s.
 */
export declare abstract class RepUserStateList extends ReplySyncListPiece<UserState> {
    /**
     * The list of requested {@link UserState}s.
     */
    userStates: UserState[];
    constructor(json: JsonObject);
    getList(): UserState[];
    protected _createBlank(): User;
}
/**
 * A container owner {@link Company} of the collection.
 */
export declare class RepUserStateListByCompany extends RepUserStateList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, UserState], index: number): boolean;
    getCompanyId(): ulong;
}
/**
 * A container owner {@link UserGroup} of the collection.
 */
export declare class RepUserStateListByUserGroup extends RepUserStateList {
    /**
     * Identifier of the {@link UserGroup} to which this collection belongs.
     */
    userGroup: ContentIdCompany | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, UserState], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepUserStateList.d.ts.map