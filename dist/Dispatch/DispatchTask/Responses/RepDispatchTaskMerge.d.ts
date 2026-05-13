import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
/**
 * A container for the {@link dispatchTask}.
 */
export declare class RepDispatchTaskMerge extends Reply {
    /**
     * An object which contains the `id` and `company` keys when there is no error.
     */
    dispatchTask: ContentIdCompany | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepDispatchTaskMerge.d.ts.map