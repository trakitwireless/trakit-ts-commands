import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
/**
 * A container for the {@link maintenanceSchedule}.
 */
export declare class RepMaintenanceScheduleMerge extends Reply {
    /**
     * An object which contains the `id` and `company` keys when there is no error.
     */
    maintenanceSchedule: ContentIdCompany | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepMaintenanceScheduleMerge.d.ts.map