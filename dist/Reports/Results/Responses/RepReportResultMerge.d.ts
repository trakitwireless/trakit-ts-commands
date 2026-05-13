import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
/**
 * A container for the {@link reportResult}.
 */
export declare class RepReportResultMerge extends Reply {
    /**
     * An object which contains the `id` and `company` keys when there is no error.
     */
    reportResult: ContentIdCompany | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepReportResultMerge.d.ts.map