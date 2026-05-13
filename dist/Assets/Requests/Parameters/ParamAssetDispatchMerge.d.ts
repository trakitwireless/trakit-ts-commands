import { DispatchDirection, JsonObject, nothing, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../API/Requests/Parameters/ParamMergeSubscribable";
/**
 * Parameters used to create or update an {@link Asset}.
 */
export declare class ParamAssetDispatchMerge extends ParamMergeSubscribable {
    /**
     * The unique identifier of the {@link Asset} you want to update.
     * <override required="update" />
     */
    id: ulong;
    /**
     * The list of {@link DispatchJob}s to be assigned to this asset.
     */
    jobs: ulong[] | nothing;
    /**
     * Driving directions and route path details.
     */
    directions: DispatchDirection[] | nothing;
    /**
     * Indicates whether the jobs should be optimized based on distance and priority.
     */
    optimize: boolean | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamAssetDispatchMerge.d.ts.map