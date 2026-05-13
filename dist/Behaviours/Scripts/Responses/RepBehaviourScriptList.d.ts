import { BehaviourScript, codified, email, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link behaviourScripts}.
 */
export declare abstract class RepBehaviourScriptList extends ReplySyncList<BehaviourScript> {
    /**
     * The list of requested {@link BehaviourScript}s.
     */
    behaviourScripts: BehaviourScript[] | nothing;
    constructor(json: JsonObject);
    getList(): BehaviourScript[];
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepBehaviourScriptListByCompany extends RepBehaviourScriptList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, BehaviourScript], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepBehaviourScriptList.d.ts.map