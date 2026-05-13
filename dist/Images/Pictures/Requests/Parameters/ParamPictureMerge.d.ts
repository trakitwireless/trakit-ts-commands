import { JsonObject } from "@trakit/objects";
import { nothing, Rectangle, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
/**
 * Parameters used to create or update an {@link Picture}.
 */
export declare class ParamPictureMerge extends ParamMergeSubscribable {
    /**
     * The unique identifier of the {@link Picture} you want to update.
     * Leave this as `null` when creating a new {@link Picture}.
     */
    id: ulong | nothing;
    /**
     * The {@link Company} to which this {@link Picture} belongs.
     * After creation, this value is read-only.
     */
    company: ulong | nothing;
    /**
     * Name for the {@link Picture}.
     */
    name: string | nothing;
    /**
     * Notes for the {@link Picture}.
     */
    notes: string | nothing;
    focals: Rectangle[] | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamPictureMerge.d.ts.map