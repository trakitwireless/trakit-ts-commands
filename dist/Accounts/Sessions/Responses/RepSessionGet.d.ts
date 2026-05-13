import { JsonObject, Session, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link User} of the current session.
 */
export declare class RepSessionGet extends ReplySyncGet<Session> {
    /**
     * The requested {@link Session} details.
     */
    session: Session;
    constructor(json: JsonObject);
    getObject(): Session;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepSessionGet.d.ts.map