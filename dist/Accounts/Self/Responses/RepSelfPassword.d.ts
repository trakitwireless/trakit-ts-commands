import { JsonObject, nothing, PasswordPolicy } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
/**
 *
 */
export declare class RepSelfPassword extends Reply {
    /**
     * Specific date/time of when the password will expire.
     */
    expires: Date;
    /**
     * Your {@link Company}'s {@link PasswordPolicy|password policy}.
     */
    passwordPolicy: PasswordPolicy | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepSelfPassword.d.ts.map