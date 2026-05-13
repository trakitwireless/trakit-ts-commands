import { JsonObject, nothing, ulong, User, UserGeneral } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link userGeneral}.
 */
export declare class RepUserGeneralGet extends ReplySyncGetPiece<UserGeneral> {
    /**
     * The requested {@link User}.
     */
    userGeneral: UserGeneral | nothing;
    constructor(json: JsonObject);
    protected _createBlank(): User;
    getObject(): UserGeneral;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepUserGeneralGet.d.ts.map