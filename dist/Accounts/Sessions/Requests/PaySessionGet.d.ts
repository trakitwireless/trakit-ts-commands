import { JsonObject } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { ParamHandle } from "./Parameters/ParamHandle";
/**
 * Gets details of the specified {@link Session}.
 */
export declare class PaySessionGet extends Payload {
    /**
     * An object to contain the "handle" of the {@link Session}.
     */
    session: ParamHandle;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PaySessionGet.d.ts.map