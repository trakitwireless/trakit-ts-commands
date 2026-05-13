import { codified, email, guid, JsonObject, nothing, Place, ulong } from "@trakit/objects";
import { ContentId } from "../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link places}.
 */
export declare abstract class RepPlaceList extends ReplySyncList<Place> {
    /**
     * The list of requested {@link Place}s.
     */
    places: Place[] | nothing;
    constructor(json: JsonObject);
    getList(): Place[];
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepPlaceListByCompany extends RepPlaceList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, Place], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepPlaceList.d.ts.map