import { DispatchTaskStatus, JsonObject, LatLng, nothing, TimeSpan, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
/**
 * Parameters used to create a new, or update an existing {@link DispatchTask}.
 */
export declare class ParamDispatchTaskMerge extends ParamMergeSubscribable {
    /**
     * The unique identifier of the {@link DispatchTask} you want to update.
     */
    id: ulong | nothing;
    /**
     * The identifier of the {@link Asset} assigned to this {@link DispatchTask}.
     */
    asset: ulong | nothing;
    /**
     * Name for the {@link DispatchTask}.
     */
    name: string | nothing;
    /**
     * Notes completed by the driver about the {@link DispatchTask}.
     * Such as service notes, damaged goods upon pick-up, etc...
     */
    notes: string | nothing;
    /**
     * A custom field used to refer this {@link DispatchTask} an external system. Examples are a work order, pick-up, waybill, etc...
     * If value is null, the field is removed from the {@link DispatchTask}.
     * If a new value or null is not provided for a current attribute, no change is made.
     */
    references: Map<string, string | nothing> | nothing;
    /**
     * The street address of this {@link DispatchTask}.
     * Condition: You must provide a `place`, a `latlng`, or an `address`.
     * Note: If you ommit the `address`, the geocoder attempts to populate the field, but will not return an error if it fails.
     */
    address: string | nothing;
    /**
     * An optional identifier of a {@link Place} for this {@link DispatchTask}.  Using a {@link Place} makes detecting the "arrived" status more reliable.
     * Condition: You must provide a `place`, a `latlng`, or an `address`.
     * Note: If you invoke the geocoder, the `address` is also replaced with the geocoded value.
     */
    place: ulong | nothing;
    /**
     * Instructions for the driver to help them complete the {@link DispatchTask}.
     * Such as which door to use, a buzz code to enter the facility, etc...
     */
    instructions: string | nothing;
    /**
     * A list of {@link Document} identifiers to attach to this {@link DispatchTask} for both driver and dispatcher review.
     */
    attachments: ulong[] | nothing;
    /**
     * The lat/long coordinates of the street address.
     * Condition: You must provide a `place`, a `latlng`, or an `address`.
     * Note: If you invoke the geocoder, the `address` is also replaced with the geocoded value.
     */
    latlng: LatLng | nothing;
    /**
     * Estimated time of arrival.
     */
    eta: Date | nothing;
    /**
     * The duration on site, or how much time is expected to complete the {@link DispatchTask}.  Used to help calculate other {@link DispatchTask} ETAs when routing is performed.
     */
    duration: TimeSpan | nothing;
    /**
     * {@link DispatchTask}s have a lifetime and each status represents a {@link DispatchTask}'s progress through it's life.
     */
    status: DispatchTaskStatus | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamDispatchTaskMerge.d.ts.map