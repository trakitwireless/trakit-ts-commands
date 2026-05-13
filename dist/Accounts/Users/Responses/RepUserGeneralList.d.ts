import { codified, email, guid, JsonObject, nothing, ulong, User, UserGeneral } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { ReplySyncListPiece } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link UserGeneral}s.
 */
export declare abstract class RepUserGeneralList extends ReplySyncListPiece<UserGeneral> {
    /**
     * The list of requested {@link UserGeneral}s.
     */
    userGenerals: UserGeneral[];
    constructor(json: JsonObject);
    getList(): UserGeneral[];
    protected _createBlank(): User;
}
/**
 * A container owner {@link Company} of the collection.
 */
export declare class RepUserGeneralListByCompany extends RepUserGeneralList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, UserGeneral], index: number): boolean;
    getCompanyId(): ulong;
}
/**
 * A container owner {@link UserGroup} of the collection.
 */
export declare class RepUserGeneralListByUserGroup extends RepUserGeneralList {
    /**
     * Identifier of the {@link UserGroup} to which this collection belongs.
     */
    userGroup: ContentIdCompany | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, UserGeneral], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepUserGeneralList.d.ts.map