import { JsonObject, ulong } from "@trakit/objects";
import { nothing, User } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link user}.
 */
export declare class RepUserGet extends ReplySyncGet<User> {
    /**
     * The requested {@link User}.
     */
    user: User | nothing;
    constructor(json: JsonObject);
    getObject(): User;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepUserGet.d.ts.map