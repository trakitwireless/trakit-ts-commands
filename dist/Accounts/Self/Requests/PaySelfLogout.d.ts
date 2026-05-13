import { JsonObject, SyncName } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
/**
 *
 */
export declare class PaySelfLogout extends Payload {
    getAction(): {
        kind: "Delete";
        object: SyncName;
        filter: "Logout";
        batch: false;
    };
    createReply(json: JsonObject): Reply;
}
//# sourceMappingURL=PaySelfLogout.d.ts.map