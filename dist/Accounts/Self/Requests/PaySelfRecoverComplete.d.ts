import { guid, uint, JsonObject, nothing, SyncName } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
/**
 * Completes the password recovery process.
 * If successful, will create a new password for your user and mark it as expired so you must change your password after using it to login the first time.
 */
export declare class PaySelfRecoverComplete extends Payload {
    /**
     * The {@link User}'s login.
     */
    guid: guid;
    /**
     * The {@link User}'s password.
     */
    length: uint | nothing;
    constructor(json?: JsonObject);
    getAction(): {
        kind: "Merge";
        object: SyncName;
        filter: "RecoverComplete";
        batch: false;
    };
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PaySelfRecoverComplete.d.ts.map