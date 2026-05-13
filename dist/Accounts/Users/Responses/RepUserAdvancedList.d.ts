import { codified, email, guid, JsonObject, nothing, ulong, User, UserAdvanced } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { ReplySyncListPiece } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link UserAdvanced}s.
 */
export declare abstract class RepUserAdvancedList extends ReplySyncListPiece<UserAdvanced> {
    /**
     * The list of requested {@link UserAdvanced}s.
     */
    userAdvanceds: UserAdvanced[];
    constructor(json: JsonObject);
    getList(): UserAdvanced[];
    protected _createBlank(): User;
}
/**
 * A container owner {@link Company} of the collection.
 */
export declare class RepUserAdvancedListByCompany extends RepUserAdvancedList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, UserAdvanced], index: number): boolean;
    getCompanyId(): ulong;
}
/**
 * A container owner {@link Company} of the collection.
 */
export declare class RepUserAdvancedListByUserGroup extends RepUserAdvancedList {
    /**
     * Identifier of the {@link UserGroup} to which this collection belongs.
     */
    userGroup: ContentIdCompany | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, UserAdvanced], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepUserAdvancedList.d.ts.map