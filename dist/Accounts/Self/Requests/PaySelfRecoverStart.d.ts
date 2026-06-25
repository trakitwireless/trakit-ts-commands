import { email, JsonObject, nothing, SyncName } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
/**
 * Begins the password recovery process.
 * If successful, will send an email to you with a code used to create a temporary password.
 */
export declare class PaySelfRecoverStart extends Payload {
    /**
     * The {@link User}'s login.
     */
    username: email;
    /**
     * Optional key in the {@link User}'s {@link Contact.emails} address list to use for recovery.
     */
    key: string;
    /**
     * Optional query string used for logging and template replacement in the email.
     */
    query: string | nothing;
    constructor(json?: JsonObject);
    getAction(): {
        kind: "Merge";
        object: SyncName;
        filter: "RecoverStart";
        batch: false;
    };
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PaySelfRecoverStart.d.ts.map