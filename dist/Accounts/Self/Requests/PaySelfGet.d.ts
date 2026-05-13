import { JsonObject, SyncName } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
/**
 *
 */
export declare class PaySelfGet extends Payload {
    getAction(): {
        kind: "Get";
        object: SyncName;
        filter: "";
        batch: false;
    };
    createReply(json: JsonObject): Reply;
}
//# sourceMappingURL=PaySelfGet.d.ts.map