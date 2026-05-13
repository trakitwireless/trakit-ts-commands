import { JsonObject, LatLng, nothing, TimeSpan, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
/**
 * Parameter values for updating the {@link DispatchStep} for a {@link DispatchJob}.
 */
export declare class ParamDispatchStepMerge extends ParamMergeSubscribable {
    /**
     * The identifier of the step.
     * Identifiers are unique to a {@link DispatchJob}, but are not unique system-wide.
     */
    id: ulong | nothing;
    /**
     * A name for the work needed to be performed.
     */
    name: string | nothing;
    /**
     * The optional estimated time of arrival for the asset.
     */
    eta: Date | nothing;
    /**
     * The optional expected duration of the work for this step.
     */
    duration: TimeSpan | nothing;
    /**
     * An optional place which can be used as a template instead of providing lat/long coordinates and a street address.
     * @see {@link Place.id}
     */
    place: ulong | nothing;
    /**
     * The street address of where the step must be completed.
     */
    address: string | nothing;
    /**
     * The lat/long coordinates of where the step must be {@link DispatchStepStatus.completed}.
     */
    latlng: LatLng | nothing;
    /**
     * When true, will mean a signature is required to complete this {@link DispatchStep}.
     */
    signature: boolean | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamDispatchStepMerge.d.ts.map