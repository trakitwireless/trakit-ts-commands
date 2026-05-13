import { IconGlyph, IconLabel, JsonObject, nothing, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
/**
 * Parameters used to create or update an {@link Icon}.
 */
export declare class ParamIconMerge extends ParamMergeSubscribable {
    /**
     * The unique identifier of the {@link Icon} you want to update.
     * Leave this as `null` when creating a new {@link Icon}.
     */
    id: ulong | nothing;
    /**
     * The {@link Company} to which this {@link Icon} belongs.
     * After creation, this value is read-only.
     */
    company: ulong | nothing;
    /**
     * Name for the {@link Icon}.
     */
    name: string | nothing;
    /**
     * Notes for the {@link Icon}.
     */
    notes: string | nothing;
    category: string | nothing;
    global: boolean | nothing;
    usage: string[] | nothing;
    label: IconLabel | nothing;
    badge: IconLabel | nothing;
    glyphs: IconGlyph[] | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamIconMerge.d.ts.map