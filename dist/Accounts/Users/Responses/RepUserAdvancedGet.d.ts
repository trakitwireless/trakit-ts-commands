import { JsonObject, nothing, ulong, User, UserAdvanced } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link userAdvanced}.
 */
export declare class RepUserAdvancedGet extends ReplySyncGetPiece<UserAdvanced> {
    /**
     * The requested {@link UserAdvanced}.
     */
    userAdvanced: UserAdvanced | nothing;
    constructor(json: JsonObject);
    protected _createBlank(): User;
    getObject(): UserAdvanced;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepUserAdvancedGet.d.ts.map