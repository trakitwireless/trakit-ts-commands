import { JsonObject, nothing } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { Subscription } from "./Content/Subscription";
/**
 * Gets the list of current subscriptions for your current session.
 */
export declare class RepSubscriptionList extends Reply {
    /**
     * The list of your current subscription types.
     */
    subscriptions: Subscription[] | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepSubscriptionList.d.ts.map