import { BehaviourLog, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { ContentIdScript } from "../../../API/Responses/Content/ContentIdScript";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";
/**
 *
 */
declare abstract class RepBehaviourLogBatchDelete extends ReplySyncBatchDelete {
    /**
     * A filter function to select which {@link BehaviourLog}s to delete from storage.
     */
    protected _filter: (log: BehaviourLog) => boolean;
    constructor(json: JsonObject, filter: (log: BehaviourLog) => boolean);
    protected _getKeys(): number[];
}
/**
 * A container for the {@link behaviourLog}.
 */
export declare class RepBehaviourLogBatchDeleteByAsset extends RepBehaviourLogBatchDelete {
    /**
     * Identifier of the {@link Asset} to which this collection belongs.
     */
    asset: ContentIdCompany | nothing;
    constructor(json: JsonObject);
    getResults(): ContentIdCompany[];
    getCompanyId(): ulong;
}
/**
 * A container for the {@link behaviourLog}.
 */
export declare class RepBehaviourLogBatchDeleteByBehaviour extends RepBehaviourLogBatchDelete {
    /**
     * Identifier of the {@link Behaviour} to which this collection belongs.
     */
    behaviour: ContentIdScript | nothing;
    constructor(json: JsonObject);
    getResults(): ContentIdScript[];
    getCompanyId(): ulong;
}
/**
 * A container for the {@link behaviourLog}.
 */
export declare class RepBehaviourLogBatchDeleteByScript extends RepBehaviourLogBatchDelete {
    /**
     * Identifier of the {@link BehaviourScript} to which this collection belongs.
     */
    behaviourScript: ContentIdCompany | nothing;
    constructor(json: JsonObject);
    getResults(): ContentIdCompany[];
    getCompanyId(): ulong;
}
export {};
//# sourceMappingURL=RepBehaviourLogBatchDelete.d.ts.map