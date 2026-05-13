import { JsonObject } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { PaySubscriptionMerge } from "./PaySubscriptionMerge";
/**
 * The types of subscriptions available using {@link ReqSubscriptionMerge}.
 * Each type has a different synchronization messages and objects.
 */
export declare class PaySubscriptionDelete extends PaySubscriptionMerge {
    createReply(json: JsonObject): Reply;
}
//# sourceMappingURL=PaySubscriptionDelete.d.ts.map