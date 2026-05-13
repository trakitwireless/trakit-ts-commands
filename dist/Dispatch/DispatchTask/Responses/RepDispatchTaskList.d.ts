import { codified, DispatchTask, email, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { IRepListByAsset } from "../../../API/Responses/IRepListByAsset";
import { IRepListByCompany } from "../../../API/Responses/IRepListByCompany";
import { IRepListByReferences } from "../../../API/Responses/IRepListByReferences";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
/**
 * A container for the requested {@link dispatchTasks}.
 */
export declare abstract class RepDispatchTaskList extends ReplySyncList<DispatchTask> {
    /**
     * The list of requested {@link DispatchTask}s.
     */
    dispatchTasks: DispatchTask[] | nothing;
    constructor(json: JsonObject);
    getList(): DispatchTask[];
}
/**
 *
 */
export declare class RepDispatchTaskListByCompany extends RepDispatchTaskList implements IRepListByCompany {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, DispatchTask], index: number): boolean;
    getCompanyId(): ulong;
}
/**
 *
 */
export declare class RepDispatchTaskListByCompanyAndRefPairs extends RepDispatchTaskListByCompany implements IRepListByReferences {
    /**
     * Case-insensitive reference pairs used to match jobs.
     * @see {@link DispatchTask.references}
     */
    references: Map<string, string> | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, DispatchTask], index: number): boolean;
}
/**
 *
 */
export declare class RepDispatchTaskListByAsset extends RepDispatchTaskList implements IRepListByAsset {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    asset: ContentIdCompany | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, DispatchTask], index: number): boolean;
    getCompanyId(): ulong;
}
/**
 *
 */
export declare class RepDispatchTaskListByAssetAndRefPairs extends RepDispatchTaskListByAsset {
    /**
     * Case-insensitive reference pairs used to match jobs.
     * @see {@link DispatchTask.references}
     */
    references: Map<string, string> | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, DispatchTask], index: number): boolean;
}
//# sourceMappingURL=RepDispatchTaskList.d.ts.map