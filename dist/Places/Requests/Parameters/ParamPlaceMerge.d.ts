import { codified, double, JsonObject, LatLng, nothing, PlaceType, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../API/Requests/Parameters/ParamMergeSubscribable";
/**
 * Parameters used to create or update an {@link Place}.
 */
export declare class ParamPlaceMerge extends ParamMergeSubscribable {
    id: ulong | nothing;
    company: ulong | nothing;
    name: string | nothing;
    notes: string | nothing;
    kind: PlaceType | nothing;
    address: string | nothing;
    icon: ulong | nothing;
    labels: codified[] | nothing;
    colour: string | nothing;
    anchor: LatLng | nothing;
    radius: double | nothing;
    shape: LatLng[] | nothing;
    pictures: ulong[] | nothing;
    reference: string | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
    validPoints(): boolean;
    validRadius(): boolean;
}
//# sourceMappingURL=ParamPlaceMerge.d.ts.map