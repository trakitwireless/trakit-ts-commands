import { codified, DispatchJob, email, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { IRepListByAsset } from "../../../API/Responses/IRepListByAsset";
import { IRepListByCompany } from "../../../API/Responses/IRepListByCompany";
import { IRepListByLabels } from "../../../API/Responses/IRepListByLabels";
import { IRepListByReferences } from "../../../API/Responses/IRepListByReferences";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
/**
 * A container for the requested {@link dispatchJobs}.
 */
export declare abstract class RepDispatchJobList extends ReplySyncList<DispatchJob> {
    /**
     * The list of requested {@link DispatchJob}s.
     */
    dispatchJobs: DispatchJob[] | nothing;
    constructor(json: JsonObject);
    getList(): DispatchJob[];
}
/**
 *
 */
export declare class RepDispatchJobListByCompany extends RepDispatchJobList implements IRepListByCompany {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, DispatchJob], index: number): boolean;
    getCompanyId(): ulong;
}
/**
 *
 */
export declare class RepDispatchJobListByCompanyAndLabels extends RepDispatchJobListByCompany implements IRepListByLabels {
    /**
     * A list of {@link LabelStyle.code|label codes} used to match {@link DispatchJob}s.
     * All labels must match to include a {@link DispatchJob} in the result.
     */
    labels: codified[] | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, DispatchJob], index: number): boolean;
}
/**
 *
 */
export declare class RepDispatchJobListByCompanyAndRefPairs extends RepDispatchJobListByCompany implements IRepListByReferences {
    /**
     * Case-insensitive reference pairs used to match jobs.
     * @see {@link DispatchJob.references}
     */
    references: Map<string, string> | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, DispatchJob], index: number): boolean;
}
/**
 *
 */
export declare class RepDispatchJobListByAsset extends RepDispatchJobList implements IRepListByAsset {
    /**
     * Identifier of the {@link Asset} to which this collection belongs.
     */
    asset: ContentIdCompany | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, DispatchJob], index: number): boolean;
    getCompanyId(): ulong;
}
/**
 *
 */
export declare class RepDispatchJobListByAssetAndLabels extends RepDispatchJobListByAsset implements IRepListByLabels {
    /**
     * A list of {@link LabelStyle.code|label codes} used to match {@link DispatchJob}s.
     * All labels must match to include a {@link DispatchJob} in the result.
     */
    labels: codified[] | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, DispatchJob], index: number): boolean;
}
/**
 *
 */
export declare class RepDispatchJobListByAssetAndRefPairs extends RepDispatchJobListByAsset implements IRepListByReferences {
    /**
     * Case-insensitive reference pairs used to match jobs.
     * @see {@link DispatchJob.references}
     */
    references: Map<string, string> | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, DispatchJob], index: number): boolean;
}
//# sourceMappingURL=RepDispatchJobList.d.ts.map