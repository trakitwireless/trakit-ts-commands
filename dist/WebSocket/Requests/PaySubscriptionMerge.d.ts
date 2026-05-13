import { JsonObject } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";
import { SubscriptionType } from "./Parameters/SubscriptionType";
/**
 * The types of subscriptions available using {@link subscribe}/{@link unsubscribe}.
 * Each type has a different synchronization messages and objects.
 */
export declare class PaySubscriptionMerge extends Payload {
    /**
     * An object to contain the "id" key.
     * @see {@link Company.id}
     */
    company: ParamId;
    /**
     * The list of subscription types you want to receive.
     * @see {@link SubscriptionType}
     */
    subscriptionTypes: SubscriptionType[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PaySubscriptionMerge.d.ts.map