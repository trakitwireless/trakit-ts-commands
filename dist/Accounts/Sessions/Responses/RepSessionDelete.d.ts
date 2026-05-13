import { JsonObject, ulong } from "@trakit/objects";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";
import { SessionHandle } from "./Content/SessionHandle";
/**
 * A container for the {@link User} of the current session.
 */
export declare class RepSessionDelete extends ReplySyncDelete {
    /**
     * An object which contains the {@link Session.handle}, related {@link User.login}, and owning {@link User.company} id.
     */
    session: SessionHandle;
    constructor(json: JsonObject);
    getKey(): string;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepSessionDelete.d.ts.map