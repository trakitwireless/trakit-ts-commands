import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
/**
 * A container for the {@link reportTemplate}.
 */
export declare class RepReportTemplateMerge extends Reply {
    /**
     * An object which contains the `id` and `company` keys when there is no error.
     */
    reportTemplate: ContentIdCompany | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepReportTemplateMerge.d.ts.map