import { email, JsonObject, nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
/**
 * When successful, this response will contain the {@link User}'s name and email address.
 */
export declare class RepSelfRecoverStart extends Reply {
    /**
     * {@link User}'s nickname or {@link Contact} name.
     */
    name: string | nothing;
    /**
     * The {@link User}'s email address.
     */
    email: email | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=RepSelfRecoverStart.d.ts.map