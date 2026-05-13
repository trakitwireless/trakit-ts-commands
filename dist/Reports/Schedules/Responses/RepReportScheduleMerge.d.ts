import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
/**
 * A container for the {@link reportSchedule}.
 */
export declare class RepReportScheduleMerge extends Reply {
    /**
     * An object which contains the `id` and `company` keys when there is no error.
     */
    reportSchedule: ContentIdCompany | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepReportScheduleMerge.d.ts.map