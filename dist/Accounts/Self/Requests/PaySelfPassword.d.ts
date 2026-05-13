import { JsonObject, SyncName } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
/**
 * Allows a {@link User} to change their own password.
 */
export declare class PaySelfPassword extends Payload {
    /**
     * Your current password, as verification that you are the proper account owner.
     */
    current: string;
    /**
     * Your new password must conform to your company's {@link PasswordPolicy|password policy}.
     */
    password: string;
    constructor(json?: JsonObject);
    getAction(): {
        kind: "Merge";
        object: SyncName;
        filter: "Password";
        batch: false;
    };
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PaySelfPassword.d.ts.map