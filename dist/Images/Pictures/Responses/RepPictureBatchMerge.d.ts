import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
/**
 *
 */
export declare class RepPictureBatchMerge extends Reply {
    /**
     *
     */
    pictures: ContentIdCompany[] | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepPictureBatchMerge.d.ts.map