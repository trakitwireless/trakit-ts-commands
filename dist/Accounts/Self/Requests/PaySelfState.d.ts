import { JsonObject, nothing, SyncName } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
/**
 * Allows a session {@link User} to change their own state.
 */
export declare class PaySelfState extends Payload {
    /**
     * Additional options which do not fit in with the formats or measurements preferences.
     * If a value of null is given, the option is removed.  To keep the option, you can use a blank string.
     * For convenience, if the value of an option is given as JSON (instead of a string), they are automatically serialized with no white-space.
     */
    options: Map<string, string | nothing> | nothing;
    constructor(json?: JsonObject);
    getAction(): {
        kind: "Merge";
        object: SyncName;
        filter: "State";
        batch: false;
    };
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PaySelfState.d.ts.map