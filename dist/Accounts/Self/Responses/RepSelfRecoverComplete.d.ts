import { email, JsonObject, nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
/**
 * When successful, this response will contain the {@link User}'s username and temporary password.
 */
export declare class RepSelfRecoverComplete extends Reply {
    /**
     * The {@link User}'s username.
     */
    username: email | nothing;
    /**
     * The {@link User}'s temporary password.
     */
    password: string | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=RepSelfRecoverComplete.d.ts.map