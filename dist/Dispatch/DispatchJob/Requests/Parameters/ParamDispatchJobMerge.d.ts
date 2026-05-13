import { codified, DispatchJobPriority, JsonObject, nothing, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
import { ParamDispatchStepMerge } from "./ParamDispatchStepMerge";
/**
 * Parameters used to create a new, or update an existing {@link DispatchJob}.
 */
export declare class ParamDispatchJobMerge extends ParamMergeSubscribable {
    /**
     * The unique identifier of the {@link DispatchJob} you want to update.
     */
    id: ulong | nothing;
    /**
     * The identifier of the {@link Company} to which the {@link DispatchJob} belongs.
     * After creation, this value is read-only.
     */
    company: ulong | nothing;
    /**
     * The identifier of the {@link Asset} assigned to the {@link DispatchJob}.
     */
    asset: ulong | nothing;
    /**
     * Name for the {@link DispatchJob}.
     */
    name: string | nothing;
    /**
     * Instructions for the driver to help them complete the {@link DispatchJob}.
     * Such as which door to use, a buzz code to enter the facility, etc...
     */
    instructions: string | nothing;
    /**
     * A custom field used to refer the {@link DispatchJob} to an external system. Examples are a work order, pick-up, waybill, etc...
     * If value is null, the field is removed from the {@link DispatchJob}.
     * If a new value or null is not provided for a current attribute, no change is made.
     */
    references: Map<string, string | nothing> | nothing;
    /**
     * A list of {@link Document} identifiers to attach to the {@link DispatchJob}.
     */
    attachments: ulong[] | nothing;
    /**
     * A list of {@link FormResult} identifiers to attach to the {@link DispatchJob}.
     */
    forms: ulong[] | nothing;
    /**
     * The importance of the {@link DispatchJob} when scheduling for an asset.
     */
    priority: DispatchJobPriority | nothing;
    /**
     * A list of codified {@link CompanyLabels.labels|label} names used to relate (unassigned) {@link DispatchJob}s to {@link Asset}s.
     */
    labels: codified[] | nothing;
    /**
     * A list of coordinates to visit in order to carry out the work for the {@link DispatchJob}.
     */
    steps: ParamDispatchStepMerge[] | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamDispatchJobMerge.d.ts.map