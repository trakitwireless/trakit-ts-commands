import { codified, JsonObject, LatLng, nothing, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
/**
 * Parameters used to create or update an {@link FormResult}.
 */
export declare class ParamFormResultMerge extends ParamMergeSubscribable {
    /**
     * The unique identifier of the {@link FormResult} you want to update.
     */
    id: ulong | nothing;
    /**
     * The unique identifier of the {@link Asset} filling out this form.
     */
    asset: ulong | nothing;
    /**
     * The unique identifier of the {@link FormTemplate} for this form.
     */
    template: ulong | nothing;
    /**
     * Name for the {@link FormResult}.
     */
    name: string | nothing;
    /**
     * Notes for the {@link FormResult}.
     */
    notes: string | nothing;
    /**
     * Codified label names used to relate forms to {@link Asset}s.
     */
    labels: codified[] | nothing;
    /**
     * A collection of values for the {@link FormResult.fields}.
     * You can update parts of the collection, the {@link FormResult} must have a value for all fields in order to complete it.
     */
    fields: Map<string, string | nothing> | nothing;
    /**
     * A timestamp from when the {@link FormResult} was completed.
     */
    completed: Date | nothing;
    /**
     * Coordinates from when the {@link FormResult} was completed.
     */
    latlng: LatLng | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamFormResultMerge.d.ts.map