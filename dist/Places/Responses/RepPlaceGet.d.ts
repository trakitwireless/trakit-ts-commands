import { JsonObject, nothing, Place, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link place}.
 */
export declare class RepPlaceGet extends ReplySyncGet<Place> {
    /**
     * The requested {@link Place}.
     */
    place: Place | nothing;
    constructor(json: JsonObject);
    getObject(): Place;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepPlaceGet.d.ts.map