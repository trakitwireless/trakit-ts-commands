import { JsonObject, nothing, ulong, User, UserState } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link UserState}.
 */
export declare class RepUserStateGet extends ReplySyncGetPiece<UserState> {
    /**
     * The requested {@link UserState}.
     */
    userState: UserState | nothing;
    constructor(json: JsonObject);
    protected _createBlank(): User;
    getObject(): UserState;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepUserStateGet.d.ts.map