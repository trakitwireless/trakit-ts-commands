import { JsonObject, nothing, Picture, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link picture}.
 */
export declare class RepPictureGet extends ReplySyncGet<Picture> {
    /**
     * The requested {@link Picture}.
     */
    picture: Picture | nothing;
    constructor(json: JsonObject);
    getObject(): Picture;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepPictureGet.d.ts.map