import { JsonObject, SyncName } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { ParamSelfContactMerge } from "./Parameters/ParamSelfContactMerge";
/**
 *
 */
export declare class PaySelfContact extends Payload {
    /**
     *
     */
    contact: ParamSelfContactMerge;
    constructor(json?: JsonObject);
    getAction(): {
        kind: "Merge";
        object: SyncName;
        filter: "Contact";
        batch: false;
    };
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PaySelfContact.d.ts.map