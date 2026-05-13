import { email, JsonObject, nothing, SyncName } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
/**
 * A container class used to house the login identifying a {@link User}.
 * Used specifically to get session details.
 */
export declare class PaySelfLogin extends Payload {
    /**
     * The {@link User}'s login.
     */
    username: email;
    /**
     * The {@link User}'s password.
     */
    password: string;
    /**
     * A string to identify the User-Agent of the login request.
     */
    userAgent: string | nothing;
    constructor(json?: JsonObject);
    getAction(): {
        kind: "Merge";
        object: SyncName;
        filter: "Login";
        batch: false;
    };
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PaySelfLogin.d.ts.map