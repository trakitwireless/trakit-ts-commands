import { JsonObject } from "@trakit/objects";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
/**
 * The types of subscriptions available using {@link subscribe}/{@link unsubscribe}.
 * Each type has a different synchronization messages and objects.
 */
export declare class PaySubscriptionList extends Payload {
    createReply(json: JsonObject): Reply;
}
//# sourceMappingURL=PaySubscriptionList.d.ts.map