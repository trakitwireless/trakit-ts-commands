import { Dashcam, JsonObject, nothing, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link dashcam}.
 */
export declare class RepDashcamGet extends ReplySyncGet<Dashcam> {
    /**
     * The requested {@link Dashcam}.
     */
    dashcam: Dashcam | nothing;
    constructor(json: JsonObject);
    getObject(): Dashcam;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepDashcamGet.d.ts.map