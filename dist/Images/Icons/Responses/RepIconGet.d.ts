import { JsonObject, ulong } from "@trakit/objects";
import { Icon, nothing } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link icon}.
 */
export declare class RepIconGet extends ReplySyncGet<Icon> {
    /**
     * The requested {@link Icon}.
     */
    icon: Icon | nothing;
    constructor(json: JsonObject);
    getObject(): Icon;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepIconGet.d.ts.map