import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
/**
 *
 */
export declare class RepReportTemplateBatchMerge extends Reply {
    /**
     *
     */
    reportTemplates: ContentIdCompany[] | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepReportTemplateBatchMerge.d.ts.map