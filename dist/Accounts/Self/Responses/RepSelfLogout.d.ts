import { guid, JsonObject, nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
/**
 * The response for a logout operation which is always successful.
 */
export declare class RepSelfLogout extends Reply {
    /**
     * Your old, no longer valid, session identifier.
     */
    ghostId: guid | nothing;
    /**
     * The timestamp from when your session expired.
     */
    expiry: Date;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepSelfLogout.d.ts.map