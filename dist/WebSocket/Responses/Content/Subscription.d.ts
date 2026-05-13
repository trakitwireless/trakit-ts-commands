import { JsonObject, nothing, ulong } from "@trakit/objects";
import { SubscriptionType } from "../../Requests/Parameters/SubscriptionType";
/**
 * Contains a {@link Company.id} and an array of {@link SubscriptionType}s for each {@link Company}.
 */
export declare class Subscription {
    /**
     * The company relevant to the subscription types you want to receive.
     * @see {@link Company.id}
     */
    company: ulong | nothing;
    /**
     * List of subscription types for the company.
     */
    subscriptionTypes: SubscriptionType[] | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=Subscription.d.ts.map