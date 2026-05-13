import { JsonObject, nothing, ulong, UserGroup } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link userGroup}.
 */
export declare class RepUserGroupGet extends ReplySyncGet<UserGroup> {
    /**
     * The requested {@link UserGroup}.
     */
    userGroup: UserGroup | nothing;
    constructor(json: JsonObject);
    getObject(): UserGroup;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepUserGroupGet.d.ts.map