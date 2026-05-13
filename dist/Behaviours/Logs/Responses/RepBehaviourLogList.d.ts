import { BehaviourLog, codified, email, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { ContentIdScript } from "../../../API/Responses/Content/ContentIdScript";
/**
 * A container for the requested {@link behaviourLogs}.
 */
export declare abstract class RepBehaviourLogList extends ReplySyncList<BehaviourLog> {
    /**
     * The list of requested {@link BehaviourLog}s.
     */
    behaviourLogs: BehaviourLog[] | nothing;
    constructor(json: JsonObject);
    getList(): BehaviourLog[];
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepBehaviourLogListByAsset extends RepBehaviourLogList {
    /**
     * Identifier of the {@link Asset} to which this collection belongs.
     */
    asset: ContentIdCompany | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, BehaviourLog], index: number): boolean;
    getCompanyId(): ulong;
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepBehaviourLogListByBehaviour extends RepBehaviourLogList {
    /**
     * Identifier of the {@link Behaviour} to which this collection belongs.
     */
    behaviour: ContentIdScript | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, BehaviourLog], index: number): boolean;
    getCompanyId(): ulong;
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepBehaviourLogListByScript extends RepBehaviourLogList {
    /**
     * Identifier of the {@link BehaviourScript} to which this collection belongs.
     */
    behaviourScript: ContentIdCompany | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, BehaviourLog], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepBehaviourLogList.d.ts.map