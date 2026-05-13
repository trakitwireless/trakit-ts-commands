import { Behaviour, codified, email, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link behaviours}.
 */
export declare abstract class RepBehaviourList extends ReplySyncList<Behaviour> {
    /**
     * The list of requested {@link Behaviour}s.
     */
    behaviours: Behaviour[] | nothing;
    constructor(json: JsonObject);
    getList(): Behaviour[];
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepBehaviourListByCompany extends RepBehaviourList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, Behaviour], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepBehaviourList.d.ts.map