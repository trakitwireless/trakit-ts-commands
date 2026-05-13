import { codified, email, guid, JsonObject, nothing, ulong, User, UserAuthentication } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { ReplySyncListPiece } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link UserAuthentication}s.
 */
export declare abstract class RepUserAuthenticationList extends ReplySyncListPiece<UserAuthentication> {
    /**
     * The list of requested {@link UserAuthentication}s.
     */
    userAuthentications: UserAuthentication[];
    constructor(json: JsonObject);
    getList(): UserAuthentication[];
    protected _createBlank(): User;
}
/**
 * A container owner {@link Company} of the collection.
 */
export declare class RepUserAuthenticationListByCompany extends RepUserAuthenticationList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, UserAuthentication], index: number): boolean;
    getCompanyId(): ulong;
}
/**
 * A container owner {@link UserGroup} of the collection.
 */
export declare class RepUserAuthenticationListByUserGroup extends RepUserAuthenticationList {
    /**
     * Identifier of the {@link UserGroup} to which this collection belongs.
     */
    userGroup: ContentIdCompany | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, UserAuthentication], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepUserAuthenticationList.d.ts.map