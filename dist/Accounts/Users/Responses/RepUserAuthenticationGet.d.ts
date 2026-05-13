import { JsonObject, nothing, ulong, User, UserAuthentication } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link UserAuthentication}.
 */
export declare class RepUserAuthenticationGet extends ReplySyncGetPiece<UserAuthentication> {
    /**
     * The requested {@link UserAuthentication}.
     */
    userAuthentication: UserAuthentication | nothing;
    constructor(json: JsonObject);
    protected _createBlank(): User;
    getObject(): UserAuthentication;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepUserAuthenticationGet.d.ts.map