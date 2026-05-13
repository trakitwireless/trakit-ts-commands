import { JsonObject } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";
/**
 *
 */
export declare class RepFormTemplateBatchMerge extends Reply {
    /**
     *
     */
    formTemplates: ContentIdCompany[] | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepFormTemplateBatchMerge.d.ts.map