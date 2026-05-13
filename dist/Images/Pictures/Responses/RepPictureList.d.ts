import { codified, email, guid, JsonObject, nothing, Picture, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link pictures}.
 */
export declare abstract class RepPictureList extends ReplySyncList<Picture> {
    /**
     * The list of requested {@link Picture}s.
     */
    pictures: Picture[] | nothing;
    constructor(json: JsonObject);
    getList(): Picture[];
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepPictureListByCompany extends RepPictureList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, Picture], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepPictureList.d.ts.map