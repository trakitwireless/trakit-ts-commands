import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { PaySessionGet } from "./PaySessionGet";
/**
 * Terminates a {@link Session} and forces the {@link User} to log back in.
 */
export declare class PaySessionDelete extends PaySessionGet {
    createReply(json: JsonObject): Reply;
}
//# sourceMappingURL=PaySessionDelete.d.ts.map